import User from './models/user';
import { addUser } from './dynamo/editTable'

let emply = new User(
    'tai',
    'pass',
    'Employee',
    '12345'
);

addUser(emply);