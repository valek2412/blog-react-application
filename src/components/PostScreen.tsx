import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PostListItem from './PostListItem';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

import { rootStore } from '../redux/configureStore';

import getPostById from '../redux/actions/postItemAction';

const Wrapper = styled.div``;

const PostScreen: React.FC = () => {
  const dispatch = useDispatch();
  const postItemState = useSelector((state: rootStore) => state.postItem);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch]);

  return (
    <Wrapper>
      <PostListItem id={postItemState.post.id} title={postItemState.post.title} body={postItemState.post.body} />
      <CommentForm postId={postItemState.post.id} />
      {postItemState.post.comments && <CommentList comments={postItemState.post.comments} />}
    </Wrapper>
  );
};

export default PostScreen;
