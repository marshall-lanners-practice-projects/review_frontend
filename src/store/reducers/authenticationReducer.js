const initialState = {
  loading: false,
  error: ''
};

const authenticationReducer = (state = initialState, action) => {
  let data = action.payload;
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: '' };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'LOGIN_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authenticationReducer;
