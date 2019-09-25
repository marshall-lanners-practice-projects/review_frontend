import axios from 'axios';

export const getPosts = () => {
  return dispatch => {
    dispatch({ type: 'GET_JOKE_START' });
    axios
      .get('https://blog-posts01.herokuapp.com/posts')
      .then(res => {
        dispatch({ type: 'GET_JOKE_SUCCESS', payload: res.data });
      })
      .catch(error => {
        dispatch({ type: 'GET_JOKE_ERROR', payload: error });
      });
  };
};
