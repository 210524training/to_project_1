import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../components/pages/home-page/HomePage';
import LoginPage from '../components/pages/login-page/LoginPage';
import ReimbursementPage from '../components/pages/reimbursement-page/ReimbursementPage';
import MyReimbursementPage from '../components/pages/my-reimbursement-page/MyReimbursementPage';
const AppRoutes: React.FC<unknown> = (props) => {

  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/reimbursements'>
        <ReimbursementPage />
      </Route>
      <Route path='/myreimbursements'>
        <MyReimbursementPage />
      </Route>
      <Route path='/'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
};

export default AppRoutes;