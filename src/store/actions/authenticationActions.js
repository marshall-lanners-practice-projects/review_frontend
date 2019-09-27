import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export const loginUser = (user, history) => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    axios
      .post('https://blog-posts01.herokuapp.com/users/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.id);
        localStorage.setItem('username', res.data.name);
        history.push('/posts');
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(error => {
        dispatch({
          type: LOGIN_ERROR,
          payload: 'incorrect username/password combination'
        });
      });
  };
};

export const registerUser = (user, history) => {
  return dispatch => {
    dispatch({ type: REGISTRATION_START });
    axios
      .post('https://blog-posts01.herokuapp.com/users/register', user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.id);
        localStorage.setItem('name', res.data.name);
        history.push('/posts');
        dispatch({ type: REGISTER_SUCCESS });
      })
      .catch(error => {
        dispatch({
          type: REGISTRATION_ERROR,
          payload: error
        });
      });
  };
};
