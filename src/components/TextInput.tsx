import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 6px;
  margin-right: 6px;
`;

const Input = styled.input`
  all: unset;
  border-bottom: 1px solid black;
  padding: 2px;
  padding-top: 3px;
`;

const Label = styled.span`
  font-size: 12px;
`;

const TextInput = (props: {label: string}) => {
  return (
    <Container>
      <Input type="text" />
      <Label>{props.label}</Label>
    </Container>
  )
}

export default TextInput;
