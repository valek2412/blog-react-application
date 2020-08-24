import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button``;

// eslint-disable-next-line react/prop-types
const PostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => setBody(event.target.value);

  const handleClick = async () => {
    try {
      await axios({
        method: 'post',
        url: 'https://bloggy-api.herokuapp.com/posts',
        data: {
          title,
          body,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper>
      <Label>
        Title:
        <Input type="text" value={title} onChange={handleTitleChange} />
      </Label>
      <Label>
        Body:
        <Input type="text" value={body} onChange={handleBodyChange} />
      </Label>
      <Button type="submit" onClick={handleClick}>
        ADD
      </Button>
    </Wrapper>
  );
};

export default PostForm;
