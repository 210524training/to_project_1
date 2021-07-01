import React, { ChangeEvent, FormEvent, useState } from 'react';
import './RegisterPage.css';
import trmsClient from '../../../remote/trms-backend/trms.client';

const RegisterPage: React.FC<unknown> = (props)=> {

  const [employeeId, setEmployeeId] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmployeeId(e.target.value);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await trmsClient.post<boolean>('/api/v1/users', {
      username,
      password,
      role: 'Employee',
      employeeId,
    });

    console.log(response.data);
  }

  console.log('username: ', username);
  console.log('password: ', password);

  return (
    <div className='container' id='register-form'>
      <form onSubmit={handleFormSubmit} >
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">Username</label>
          <input type="text" className="form-control" id="usernameInput"
            onChange={handleUsernameChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input type="password" className="form-control" id="passwordInput"
            onChange={handlePasswordChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="idInput" className="form-label">Employee ID</label>
            <input type="text" className="form-control" id="idInput"
              onChange={handleIdChange} />
        </div>
          <input type="submit" className="btn btn-primary" value='Submit' />
      </form>
    </div>
  );
};

export default RegisterPage;