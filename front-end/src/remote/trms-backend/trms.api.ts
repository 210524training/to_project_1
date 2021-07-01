import User from '../../../../back-end/src/models/user';
import { Tuition } from '../../../../back-end/src/models/reimbursement';
import trmsClient from './trms.client';

export const sendLogin = async (username: string, password: string): Promise<User> => {
  const { data: user } = await trmsClient.post<User>('/login', {
    username,
    password,
  });

  return user;
};

export const sendCreate = async (tuitionType: string) => {
  await trmsClient.post('/reimbursements', {
    tuition: tuitionType,
  })
    .then(() => {
      alert('Successful!');
    })
    .catch((err) => {
      console.log(err);
      alert('Unsuccessful...');
    });
};
