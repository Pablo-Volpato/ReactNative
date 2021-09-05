import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color: #5d0000;
flex: 1;
justify-content: center;
align-items: center;
`;
export const InputArea = styled.View`
padding: 40px;
width: 100%;

`;
export const CustomButton = styled.TouchableOpacity`
height: 60px;
background-color: #ff2a2a;
border-radius: 30px;
justify-content: center;
align-items: center;
`;
export const CustomButtonText = styled.Text`
font-size: 18px;
`;
export const SignMessage = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 50px;
margin-bottom: 20px;
`;
export const SignMessageBold = styled.Text`
font-size: 16px;
color: #ff0000;
font-weight: bold;
`;

export const SignMessageText  = styled.Text`
font-size: 16px;
color: #ff0000;
`;
