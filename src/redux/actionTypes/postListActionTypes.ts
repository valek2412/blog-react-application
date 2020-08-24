import { Post } from './postItemActionTypes';

export const POST_LIST_LOADING = 'POST_LIST_LOADING';
export const POST_LIST_FAIL = 'POST_LIST_FAIL';
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS';

export interface PostListLoading {
  type: typeof POST_LIST_LOADING;
}

export interface PostListFail {
  type: typeof POST_LIST_FAIL;
}

export interface PostListSuccess {
  type: typeof POST_LIST_SUCCESS;
  payload: Post[];
}

export type PostListDispatchTypes = PostListLoading | PostListFail | PostListSuccess;
