import { DocumentClient } from 'aws-sdk/clients/dynamodb.js';
import dynamo from '../dynamo/dynamo';
import Reimbursement, { Status } from '../models/reimbursement';
import User from '../models/user';
import log from '../utils/log';

class ReimbursementDAO {
  constructor(
    private docClient = dynamo,
  ) {}

  async createNewReimbursementRequest(reimbursement: Reimbursement): Promise<boolean> {
    const params: DocumentClient.PutItemInput = {
      TableName: 'reimbursements',
      Item: reimbursement,
    };

    const result = await this.docClient.put(params).promise();
    if(result) {
      log.debug(result);
      return true;
    }
    return false;
  }

  async getAll(): Promise<Reimbursement[]> {
    const params: DocumentClient.ScanInput = {
      TableName: 'reimbursements',
    };

    const result = await this.docClient.scan(params).promise();
    if(result.Items) {
      log.debug(result);
      return result.Items as Reimbursement[];
    }
    throw new Error('Reimbursement request not found');
  }

  async getReimbursementRequestById(id: string): Promise<Reimbursement> {
    const params: DocumentClient.GetItemInput = {
      TableName: 'reimbursements',
      Key: {
        id,
      },
    };

    const result = await this.docClient.get(params).promise();
    if(result.Item) {
      log.debug(result);
      return result.Item as Reimbursement;
    }
    throw new Error('Reimbursement request not found');
  }

  // eslint-disable-next-line max-len
  // async updateRequestFinalGrade(docid: string, finalgrade: string | undefined): Promise<boolean> {
  //   console.log('insidesao', docid, finalgrade);
  //   const params: DocumentClient.UpdateItemInput = {
  //     TableName: 'reimbursements',
  //     Key: {
  //       docid,
  //     },
  //     UpdateExpression: 'SET #fg = :v',
  //     ExpressionAttributeNames: {
  //       '#fg': 'finalgrade',
  //     },
  //     ExpressionAttributeValues: {
  //       ':v': finalgrade,
  //     },
  //     ReturnValues: 'UPDATED_NEW',
  //   };

  //   const isUpdated = await this.docClient.update(params).promise();
  //   if(isUpdated) {
  //     return true;
  //   }
  //   throw new Error('Cannot update request');
  // }

  async getAllReimbursementRequestsByStatus(state: string): Promise<Reimbursement[]> {
    const params: DocumentClient.ScanInput = {
      TableName: 'reimbursements',
      FilterExpression: '#s = :state',
      ExpressionAttributeNames: {
        '#s': 'state',
      },
      ExpressionAttributeValues: {
        ':status': state,
      },
    };

    const results = await this.docClient.scan(params).promise();
    if(results.Items) {
      if(results.Items?.length > 0) {
        return results.Items as Reimbursement[];
      }
    }
    return [];
  }

  // eslint-disable-next-line max-len
  async getAllReimbursementRequestsByUsername(username: User): Promise<Reimbursement[]> {
    const params: DocumentClient.ScanInput = {
      TableName: 'reimbursements',
      FilterExpression: '#u = :user',
      ExpressionAttributeNames: {
        '#u': 'requestBy',
      },
      ExpressionAttributeValues: {
        ':user': username.username,
      },
    };

    const results = await this.docClient.scan(params).promise();
    if(results.Items) {
      if(results.Items?.length > 0) {
        return results.Items as Reimbursement[];
      }
    }
    return [];
  }

  // async getALLReimbursementRequestPendingReimbursement(): Promise<Reimbursement[]> {
  //   const params: DocumentClient.ScanInput = {
  //     TableName: 'reimbursements',
  //     FilterExpression: '#s = :s',
  //     ExpressionAttributeNames: {
  //       '#s': 'status',
  //     },
  //     ExpressionAttributeValues: {
  //       ':s': 'Awaiting Benefits Coordinator',
  //     },
  //   };

  //   const results = await this.docClient.scan(params).promise();
  //   if(results.Items) {
  //     if(results.Items?.length > 0) {
  //       return results.Items as Reimbursement[];
  //     }
  //   }
  //   return [];
  // }

  async updateReimbursementRequestStatus(
    id: string,
    status: Status,
  ): Promise<boolean> {
    const params: DocumentClient.UpdateItemInput = {
      TableName: 'reimbursements',
      Key: {
        id,
      },
      UpdateExpression: 'SET #s = :v',
      ExpressionAttributeNames: {
        '#s': 'state',
      },
      ExpressionAttributeValues: {
        ':v': status,
      },
      ReturnValues: 'UPDATED_NEW',
    };

    const isUpdated = await this.docClient.update(params).promise();
    if(isUpdated) {
      return true;
    }
    throw new Error('Cannot update request');
  }

  // async updateRequestAmount(
  //   docid: string,
  //   amount: number,
  //   comment: string,
  //   isExceedingFunds: boolean,
  // ): Promise<boolean> {
  //   const params: DocumentClient.UpdateItemInput = {
  //     TableName: 'reimbursements',
  //     Key: {
  //       docid,
  //     },
  //     UpdateExpression: 'SET #a = :v, #c = :c, #e = :e',
  //     ExpressionAttributeNames: {
  //       '#a': 'projectedAmount',
  //       '#c': 'comments',
  //       '#e': 'exceedingFunds',
  //     },
  //     ExpressionAttributeValues: {
  //       ':v': amount,
  //       ':c': comment,
  //       ':e': isExceedingFunds,
  //     },
  //     ReturnValues: 'UPDATED_NEW',
  //   };

  //   const isUpdated = await this.docClient.update(params).promise();
  //   if(isUpdated) {
  //     return true;
  //   }
  //   throw new Error('Cannot update request');
  // }

  async deleteRequestById(id: string): Promise<void> {
    const params: DocumentClient.DeleteItemInput = {
      TableName: 'reimbursements',
      Key: {
        id,
      },
    };

    try {
      await this.docClient.delete(params).promise();
    } catch(err) {
      log.error(err);
    }
  }
}

export default new ReimbursementDAO();
