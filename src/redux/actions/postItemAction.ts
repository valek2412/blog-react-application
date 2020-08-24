import { Dispatch } from 'redux';
import axios from 'axios';
import {
  GET_POST_ITEM_SUCCESS,
  GET_POST_ITEM_LOADING,
  GET_POST_ITEM_FAIL,
  GetPostItemDispatchTypes,
} from '../actionTypes/postItemActionTypes';

const getPostById = (id: number) => async (dispatch: Dispatch<GetPostItemDispatchTypes>) => {
  try {
    dispatch({ type: GET_POST_ITEM_LOADING });

    const res = await axios.get(`https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`);

    dispatch({ type: GET_POST_ITEM_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: GET_POST_ITEM_FAIL });
  }
};

export default getPostById;
