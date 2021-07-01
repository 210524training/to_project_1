import AWS from 'aws-sdk';

 const dynamo = new AWS.DynamoDB.DocumentClient({
   region: 'us-east-2',
   endpoint: 'http://dynamodb.us-east-2.amazonaws.com',
   apiVersion: 'latest',
 });
 
 export default dynamo;