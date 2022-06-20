import UserActionTypes from './user.types';

const INITIAL_STATE = {
  error: '',
  isLoading: false,
  list: [],
  selectedUser: null,
  currentPage: 1
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USERS_ASYNC:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case UserActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        list: [...action.payload.results],
        currentPage: action.payload.page,
        isLoading: false,
        error: ''
      };
    case UserActionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case UserActionTypes.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
