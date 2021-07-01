import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ReimbursementPage.css';
import { sendCreate } from '../../../remote/trms-backend/trms.api'
import { Tuition } from '../../../../../back-end/src/models/reimbursement';

const ReimbursementPage: React.FC<unknown> = (props) => {

  const [tuitionType, setTuitionType] = useState<string>('University Course');

  // const dispatch = useAppDispatch();
  const history = useHistory();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await sendCreate(tuitionType as Tuition);

    history.push('/');
  }

  return (<>
     <div className="banner">
        <div>
          <h1 className='whiteText'>TemCo Tuition Reimbursement Portal</h1><br/>
        </div>
        <br/>
        <h2 className='whiteText'>Submit your requests for tuition reimbursement for qualifying courses.</h2>
        <br/>
        <form onSubmit={ handleFormSubmit }>
          <label htmlFor="dropdown1">Choose your tuition type: </label>
          <br/>
          <select className="dropdown1" onChange = {(event) => setTuitionType(event.target.value)}>
            <option value='University Course'>University Course</option>
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
            <button type="submit" className="button" value='Submit'>Submit</button>
          </div>
        </form>
      </div>
  </>
  )

}

export default ReimbursementPage;