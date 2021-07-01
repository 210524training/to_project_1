/* eslint-disable class-methods-use-this */
import ReimbursementDAO from '../../DAO/reimbursement.DAO';
import Reimbursement, { Status, Tuition } from '../../models/reimbursement';
import User from '../../models/user';

export const docid = Math.random().toString(36).substring(7);

class ReimbursementService {
  constructor(
    private data = ReimbursementDAO,
  ) {}

  // eslint-disable-next-line class-methods-use-this
  // isUrgent(todaysDate: Date, eventStart: Date): boolean {
  //   const convertToDate = new Date(eventStart);
  //   // 12096e5 is 2 weeks in milliseconds
  //   // transforms the dates into miliseconds and compare to determine
  //   // if submission is less than 2 weeks from event start
  //   const isLessThanTwoWeeks = convertToDate.getTime() - 12096e5;
  //   if(todaysDate.getTime() < isLessThanTwoWeeks) {
  //     return false;
  //   }
  //   return true;
  // }

  async getAll(): Promise<Reimbursement[]> {
    return this.data.getAll();
  }

  async deleteRequestById(id: string): Promise<void> {
    await this.data.deleteRequestById(id);
  }

  /**
   * Following method is responsible for converting user data into a Reimbursement
   * TODO: Dates need to be formatted into so they are more uniformed.
   */
  async constructNewReimbursementRequest(
    requestBy: string,
    state: Status = 'Pending Approval',
    tuitionType: Tuition,
    id: string = docid,
    // projectedAmount: number,
  ): Promise<boolean> {
    // server generated data for the request
    // const submissionDate = new Date();
    // const isUrgent = this.isUrgent(submissionDate, eventStartDate);

    // let currentStatus: Status;

    // switch (currentUserRole) {
    // case 'Direct Supervisor':
    //   currentStatus = 'Pending Approval';
    //   break;
    // case 'Department Head':
    //   currentStatus = 'Pending Approval';
    //   break;
    // default:
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //   currentStatus = 'Pending Approval';
    //   break;
    // }
    // console.log(passingGrade);
    // create new request object
    const request = new Reimbursement(
      tuitionType,
      requestBy,
      state,
      id,
    );
    const isSentToDynamo = await this.data.createNewReimbursementRequest(request);
    return isSentToDynamo;
  }

  /**
   * Allows user to update request's final grade attribute
   */
  // async updateFinalGrade(docid: string, finalgrade: string | undefined): Promise<boolean> {
  //   console.log(docid, finalgrade);
  //   const isUpdated = await this.data.updateRequestFinalGrade(docid, finalgrade);
  //   if(isUpdated) {
  //     return true;
  //   }
  //   throw new Error('Grade could not be updated');
  // }

  /**
   * Allows user to update request's final grade attribute
   */
  // async updateAmount(
  //   docid: string,
  //   amount: number,
  //   comment: string,
  //   isExceedingFunds: boolean,
  // ): Promise<boolean> {
  // eslint-disable-next-line max-len
  //   const isUpdated = await this.data.updateRequestAmount(docid, amount, comment, isExceedingFunds);
  //   if(isUpdated) {
  //     return true;
  //   }
  //   throw new Error('Grade could not be updated');
  // }

  /**
   * Requests data to populate the user's bin according to the role assigned and status of request
   */

  async populateUserBin(user: User): Promise<Reimbursement[]> {
    return this.data.getAllReimbursementRequestsByStatus(`Awaiting ${user.role}`);
  }

  /**
   * This function will update the status of the request
   */
  // async updateStatus(
  //   docid: string,
  //   state: Status,
  //   comments: string,
  // ): Promise<boolean> {
  // let newStatus: Status;

  // switch (state) {
  // case 'Direct Supervisor Approval':
  //   newStatus = 'Awaiting Department Head';
  //   break;
  // case 'Department Head Approval':
  //   newStatus = 'Awaiting Benefits Coordinator';
  //   break;
  // case 'Benefits Coordinator Approval':
  //   newStatus = 'Pending Reimbursement';
  //   break;
  // case 'Returned to Employee':
  //   newStatus = 'Awaiting Employee';
  //   break;
  // case 'Returned to Department Head':
  //   newStatus = 'Awaiting Department Head';
  //   break;
  // case 'Returned to Direct Supervisor':
  //   newStatus = 'Awaiting Direct Supervisor';
  //   break;
  // case 'Reimbursement Approved':
  //   newStatus = status;
  //   break;
  // case 'Reimbursement Rejected':
  //   newStatus = status;
  //   break;
  // case 'Pending Reimbursement':
  //   newStatus = status;
  //   break;
  // default:
  //   throw new Error('Invalid Status Assigned');
  // }
  // const isUpdated = await this.data.updateReimbursementRequestStatus(docid, newStatus, comments);
  // if(!isUpdated) {
  //   throw new Error('Could not be updated');
  // }
  //   return true;
  // }

  // async getPendingReimbursements(): Promise<Reimbursement[]> {
  //   const data = await this.data.getAllReimbursementRequestsByStatus(state);
  //   if(data.state === 'Pending Approval') {
  //     return [];
  //   }
  //   return data;
  // }

  async deleteRequest(id: string): Promise<void> {
    await this.data.deleteRequestById(id);
  }
}

export default new ReimbursementService();
