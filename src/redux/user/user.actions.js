import UserActionTypes from './user.types';
import axios from 'axios';
import { API_BASE } from '../helpers';

export const getUsersAsync = () => ({
  type: UserActionTypes.GET_USERS_ASYNC
});
export const getUsersSuccess = (payload) => ({
  type: UserActionTypes.GET_USERS_SUCCESS,
  payload
});
export const getUsersFailure = (err) => ({
  type: UserActionTypes.GET_USERS_FAILURE,
  payload: err
});
export const setUser = (payload) => ({
  type: UserActionTypes.SET_SELECTED_USER,
  payload
});

export const getUsers = (page = 1) => {
  return async (dispatch) => {
    dispatch(getUsersAsync());
    try {
      const {
        data: { results }
      } = await axios.get(`${API_BASE}?page=${page}&results=10&seed=abc`);
      dispatch(getUsersSuccess({ results, page }));
    } catch (err) {
      dispatch(getUsersFailure(err.message));
    }
  };
};
