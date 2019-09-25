const initialState = {
  loading: false,
  error: null,
  comments: []
};

const commentsReducer = (state = initialState, action) => {
  let data = action.payload;
  switch (action.type) {
    case 'GET_COMMENTS_START':
      return { ...state, loading: true, comments: [], error: null };
    case 'GET_COMMENTS_SUCCESS':
      return { ...state, loading: false, comments: data, error: null };
    case 'GET_COMMENTS_ERROR':
      return { ...state, loading: false, comments: [], error: data };
    default:
      return state;
  }
};

export default commentsReducer;
