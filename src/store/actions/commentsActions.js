import axios from 'axios';

export const getCommentsForPost = () => {
  return dispatch => {
    dispatch({ type: 'GET_COMMENTS_START' });
    axios
      .get('https://blog-posts01.herokuapp.com/comments/post/1')
      .then(res => {
        dispatch({
          type: 'GET_COMMENTS_SUCCESS',
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({ type: 'GET_COMMENTS_ERROR', payload: error });
      });
  };
};
