import axios from 'axios';
import { tsPropertySignature } from '@babel/types';

export const loginUser = (user, history) => {
  return dispatch => {
    dispatch({ type: 'LOGIN_START' });
    axios
      .post('https://blog-posts01.herokuapp.com/users/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.id);
        localStorage.setItem('username', res.data.name);
        history.push('/posts');
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch(error => {
        dispatch({
          type: 'LOGIN_ERROR',
          payload: 'incorrect username/password combination'
        });
      });
  };
};
