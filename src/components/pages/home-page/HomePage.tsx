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
        <br/>
        <h2 className='whiteText'>Submit your requests for tuition reimbursement for qualifying courses.</h2>
        <br/>
        <form>
          <label htmlFor="dropdown1">Choose your tuition type: </label>
          <br/>
          <select className="dropdown1">
            <option value="University Course">University Course</option>
            <option value="Seminar">Seminar</option>
            <option value="Certification Prep Class">Certification Prep Class</option>
            <option value="Certification">Certification</option>
            <option value="Technical Training">Technical Training</option>
            <option value="Other">Other</option>
          </select>
          <br/>
          <br/>
          <br/>
          <div>
            <span>
            <label htmlFor="text1">How much was your tuition?</label>
            <textarea id="fname" name="fname" rows={1} cols={15} />
            </span>
            <button type="button">Submit</button>
          </div>

        </form>
        { user && <p>Greetings, {user.username}</p>}
      </div>
    </>
  );
};

export default HomePage;
