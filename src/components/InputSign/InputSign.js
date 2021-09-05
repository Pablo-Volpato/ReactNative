import React from 'react';
import styled from 'styled-components/native';

const InputSignArea = styled.View` 
    width: 100%;
    height: 60px;
    background-color: #ff5050;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
  const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color:white;
  margin-left: 10px;
  `;
export default ({IconSvg,placeholder,value,onChangeText,password}) =>{
  return (
    <InputSignArea>
     <IconSvg fill='#ffffff'/>
      <Input
      placeholder={placeholder}
      value = {value}
      onChangeText={onChangeText}
      secureTextEntry={password}
      >
      </Input>
    </InputSignArea>
  );
}