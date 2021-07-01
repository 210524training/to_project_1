import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './MyReimbursementPage.css';
import Reimbursement from '../../../../../back-end/src/models/reimbursement';
import User from '../../../../../back-end/src/models/user';
import reimbursementDAO from '../../../../../back-end/src/DAO/reimbursement.DAO';

const MyReimbursementPage: React.FC<unknown> = (props) => {

  return (<>
     <div className="banner">
        <div>
          <h1 className='whiteText'>My Reimbursements</h1><br/>
        </div>
        <br/>
        <h3 className='whiteText'>All submitted reimbursement requests are displayed here.</h3>
        <br/>
    </div>
  </>
  )

}

export default MyReimbursementPage;