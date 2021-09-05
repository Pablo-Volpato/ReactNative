import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color: #141414;

flex: 1;
justify-content: center;
align-items: center;
`;
export const InputArea = styled.View`
padding: 0;
width: 100%;
margin: 0;
`;
export const SendButton = styled.TouchableOpacity`
border-radius: 15px;
background-color:darkred;
`;
export const SendButtonText = styled.Text`
color:white;
font-size: 17px;
text-align: center;
font-weight: bold;
`;
export const MessageText = styled.Text`
color:white;
font-size: 25px;
text-align: center;
font-weight: bold;
`;
export const ImageCheckout = styled.ImageBackground`
flex: 1;
width: 100%;
`;
export const InputView = styled.View`
margin-top: 450px;

`;
export const BackButton = styled.TouchableOpacity`
position: absolute;
left: 0;
top: 0;
z-index: 9;
`;
export const Scroller = styled.ScrollView`
flex:1;
padding: 20px;

`;
