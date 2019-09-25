const initialState = {
  loading: false,
  error: null,
  posts: []
};

const postsReducer = (state = initialState, action) => {
  let data = action.payload;
  switch (action.type) {
    case 'GET_POSTS_START':
      return { ...state, loading: true, posts: [], error: null };
    case 'GET_POSTS_SUCCESS':
      return { ...state, loading: false, posts: data, error: null };
    case 'GET_POSTS_ERROR':
      return { ...state, loading: false, posts: [], error: data };
    default:
      return state;
  }
};

export default postsReducer;
