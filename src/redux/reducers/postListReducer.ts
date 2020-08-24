import {
  POST_LIST_FAIL,
  POST_LIST_LOADING,
  POST_LIST_SUCCESS,
  PostListDispatchTypes,
} from '../actionTypes/postListActionTypes';
import { Post } from '../actionTypes/postItemActionTypes';

interface DefaultStateI {
  loading: boolean;
  posts: Post[];
}

const defaultState: DefaultStateI = {
  loading: false,
  posts: [],
};

const getAllPostsReducer = (state: DefaultStateI = defaultState, action: PostListDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case POST_LIST_FAIL:
      return { ...state, loading: false };
    case POST_LIST_LOADING:
      return { ...state, loading: true };
    case POST_LIST_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    default:
      return state;
  }
};

export default getAllPostsReducer;
