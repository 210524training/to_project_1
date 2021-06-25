import AWS from 'aws-sdk';
import User from '../models/user';

export const docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-2',
  endpoint: 'https://dynamodb.us-east-2.amazonaws.com',
  apiVersion: 'latest',
});

export async function addUser(user: User): Promise<boolean> {
  const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
    TableName: 'users',
    Item: user,
  };

  try {
    const result = await docClient.put(params).promise();

    console.log(result);
    return true;
  } catch(error) {
    console.log(error);
    return false;
  }
}

export async function deleteUser(id: string): Promise<boolean> {
  const params: AWS.DynamoDB.DocumentClient.DeleteItemInput = {
    TableName: 'users',
    Key: { id },
  };

  try {
    const result = await docClient.delete(params).promise();

    console.log(result);
    return true;
  } catch(error) {
    console.log(error);
    return false;
  }
}
