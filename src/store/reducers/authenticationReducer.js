import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTRATION_START,
  REGISTER_SUCCESS,
  REGISTRATION_ERROR
} from '../actions/authenticationActions';

const initialState = {
  loading: false,
  error: ''
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true, error: '' };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, error: '' };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    case REGISTRATION_START:
      return { ...state, loading: true, error: '' };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, error: '' };
    case REGISTRATION_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authenticationReducer;
