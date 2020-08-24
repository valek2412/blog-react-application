import React from 'react';
import styled from 'styled-components';
import { H1, Phrase } from '../styles/typography';
import { Comment } from '../redux/actionTypes/postItemActionTypes';

type Props = {
  comments: Comment[];
};

const Wrapper = styled.div``;

// eslint-disable-next-line react/prop-types
const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <Wrapper>
      <H1>Comments</H1>
      {/* eslint-disable-next-line react/prop-types */}
      {comments.map((item) => (
        <Phrase>{item.body}</Phrase>
      ))}
    </Wrapper>
  );
};

export default CommentList;
