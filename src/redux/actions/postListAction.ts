import { Dispatch } from 'redux';
import axios from 'axios';
import {
  POST_LIST_SUCCESS,
  POST_LIST_LOADING,
  POST_LIST_FAIL,
  PostListDispatchTypes,
} from '../actionTypes/postListActionTypes';

const getAllPosts = () => async (dispatch: Dispatch<PostListDispatchTypes>) => {
  try {
    dispatch({ type: POST_LIST_LOADING });

    const res = await axios.get(`https://bloggy-api.herokuapp.com/posts`);

    dispatch({ type: POST_LIST_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: POST_LIST_FAIL });
  }
};

export default getAllPosts;
