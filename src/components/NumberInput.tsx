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
  border: 1px solid black;
  text-align: center;
  padding: 2px;
  width: 100%;
  box-sizing: border-box;
`;

const Label = styled.span`
  font-size: 12px;
`;

const TextInput = (props: {label: string, size?: number, defaultValue?: number, changeDispatcher: Function}) => {
  return (
    <Container>
      <Input
        type="text"
        style={{ width: (props.size ? props.size : '40') + 'px' }}
        onChange={(e)=>{props.changeDispatcher(e.target.value)}}
      />
      <Label>{props.label}</Label>
    </Container>
  )
}

export default TextInput;
