export type Post = {
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
};

export type Comment = {
  id: number;
  postId?: number;
  body?: string;
};

export const GET_POST_ITEM_LOADING = 'GET_POST_ITEM_LOADING';
export const GET_POST_ITEM_FAIL = 'GET_POST_ITEM_FAIL';
export const GET_POST_ITEM_SUCCESS = 'GET_POST_ITEM_SUCCESS';

export interface GetPostItemLoading {
  type: typeof GET_POST_ITEM_LOADING;
}

export interface GetPostItemFail {
  type: typeof GET_POST_ITEM_FAIL;
}

export interface GetPostItemSuccess {
  type: typeof GET_POST_ITEM_SUCCESS;
  payload: Post;
}

export type GetPostItemDispatchTypes = GetPostItemLoading | GetPostItemFail | GetPostItemSuccess;
