import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { H1, Paragraph } from '../styles/typography';

type Props = {
  id: number;
  title: string;
  body: string;
};

const Wrapper = styled.div``;

const Header = styled.div``;

const Body = styled.div``;

const Footer = styled.div``;

const DeleteButton = styled.button`
  color: red;
`;

// eslint-disable-next-line react/prop-types
const PostListItem: React.FC<Props> = ({ id, title, body }) => {
  const handleDeleteClick = async () => {
    try {
      await axios.delete(`https://bloggy-api.herokuapp.com/posts/${id}`);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Wrapper>
      <Header>
        <H1>{title}</H1>
      </Header>
      <Body>
        <Paragraph>{body}</Paragraph>
      </Body>
      <Footer>
        <DeleteButton onClick={handleDeleteClick}>DELETE</DeleteButton>
      </Footer>
      <hr />
    </Wrapper>
  );
};

export default PostListItem;
