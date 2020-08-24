import {
  GET_POST_ITEM_FAIL,
  GET_POST_ITEM_LOADING,
  GET_POST_ITEM_SUCCESS,
  GetPostItemDispatchTypes,
  Post,
} from '../actionTypes/postItemActionTypes';

interface DefaultStateI {
  loading: boolean;
  post: Post;
}

const defaultState: DefaultStateI = {
  loading: false,
  post: {
    id: 0,
    title: '',
    body: '',
    comments: [],
  },
};

const getPostByIdReducer = (state: DefaultStateI = defaultState, action: GetPostItemDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case GET_POST_ITEM_FAIL:
      return { ...state, loading: false };
    case GET_POST_ITEM_LOADING:
      return { ...state, loading: true };
    case GET_POST_ITEM_SUCCESS:
      return { ...state, loading: false, post: action.payload };
    default:
      return state;
  }
};

export default getPostByIdReducer;
