import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color: #141414;
flex: 1;
`;

export const CardContainer = styled.View`
   display: flex;
   flex-direction: row;
  flex-wrap: wrap;
`;
export const ButtonContainer = styled.View`
margin-bottom: 10px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;
export const FinishButton = styled.TouchableOpacity`
 border: 1px white solid;
 border-radius: 8px;
 background-color: #ff6000;
 width: 40%;
`;
export const FinishText = styled.Text`
 color:white;
 font-size: 20px;
 font-weight: bold;
 text-align: center;
`;

export const ClearButton = styled.TouchableOpacity`
border: 1px white solid;
  border-radius: 8px;
  background-color: #ff6000;
  width: 40%;
`;
export const ClearText = styled.Text`
  color:white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
export const Scroller = styled.ScrollView`

`;