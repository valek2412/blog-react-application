import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

type Props = {
  postId: number;
};

const Wrapper = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button``;

// eslint-disable-next-line react/prop-types
const CommentForm: React.FC<Props> = ({ postId }) => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value);

  const handleClick = async () => {
    try {
      await axios({
        method: 'post',
        url: 'https://bloggy-api.herokuapp.com/comments',
        data: {
          postId,
          body: text,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper>
      <Label>
        Add comment:
        <Input type="text" value={text} onChange={handleChange} />
      </Label>
      <Button type="submit" onClick={handleClick}>
        ADD
      </Button>
    </Wrapper>
  );
};

export default CommentForm;
