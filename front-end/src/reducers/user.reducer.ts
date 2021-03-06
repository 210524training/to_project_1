import { Reducer } from 'redux';
import { UserAction, UserActionTypes } from '../action-mappers/user.action.mapper';
import User from '../../../back-end/src/models/user';

// THIS FILE IS NO LONGER IN USE DUE TO REDUX TOOLKIT

export type UserState = User | null;

const userReducer: Reducer<UserState, UserAction> = (state = null, action) => {
  switch(action.type) {
  case UserActionTypes.USER_LOGIN:
    return action.payload;
  case UserActionTypes.USER_LOGOUT:
    return null;
  case UserActionTypes.USER_LOGIN_ASYNC_PENDING:
    return state;
  case UserActionTypes.USER_LOGIN_ASYNC_REJECTED:
    return state;
  case UserActionTypes.USER_LOGIN_ASYNC_FULFILLED:
    return action.payload;
  default:
    return state;
  }
}

export default userReducer;