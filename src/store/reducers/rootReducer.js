import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  posts: postsReducer,
  comments: commentsReducer
});

export default rootReducer;
