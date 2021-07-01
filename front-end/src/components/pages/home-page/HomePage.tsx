import React from 'react';
import './HomePage.css';
import { useAppSelector } from '../../../hooks';
import { selectUser, UserState } from '../../../slices/user.slice';

type Props = {
}

const HomePage: React.FC<Props> = (props) => {
  const user = useAppSelector<UserState>(selectUser);

  return (
    <>
      <div className="banner">
        <div>
          <h1 className='whiteText'>TemCo Tuition Reimbursement Portal</h1><br/>
        </div>
        { user && <p className = 'greeting'>Greetings, {user.username}</p>}
        <br/>
        <h2 className='whiteText'>Submit your requests for tuition reimbursement for qualifying courses.</h2>
        <br/>
        <div>
          <p className='hometext'>Please sign in before creating a new reimbursement request.</p>
          <p className='hometext'>To create a new reimbursement request, click on the New Reimbursement tab in the top right corner.</p>
        </div>

      </div>
    </>
  );
};

export default HomePage;
