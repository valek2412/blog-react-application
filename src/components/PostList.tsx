import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PostListItem from './PostListItem';
import { rootStore } from '../redux/configureStore';
import getAllPosts from '../redux/actions/postListAction';

import { H1 } from '../styles/typography';
import PostForm from './PostForm';

const Wrapper = styled.div`
  margin: 2em;
`;

const PostList: React.FC = () => {
  const dispatch = useDispatch();
  const postListState = useSelector((state: rootStore) => state.postList);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (postListState.loading) return <h1>Loading</h1>;

  return (
    <Wrapper>
      <H1>ADD POST</H1>
      <PostForm />
      <H1>POSTS</H1>
      {postListState.posts.map((item) => (
        <PostListItem key={item.id} id={item.id} title={item.title} body={item.body} />
      ))}
    </Wrapper>
  );
};

export default PostList;
