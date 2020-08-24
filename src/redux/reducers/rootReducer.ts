import { combineReducers } from 'redux';
import getAllPostsReducer from './postListReducer';
import getPostByIdReducer from './postItemReducer';

const rootReducer = combineReducers({
  postList: getAllPostsReducer,
  postItem: getPostByIdReducer,
});

export default rootReducer;
