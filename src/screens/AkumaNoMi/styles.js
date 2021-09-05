import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color: #141414;
flex: 1;
`;
export const Scroller = styled.ScrollView`
flex: 1;
`;
export const FruitUser = styled.Image`
flex: 1;
width: 100%;
height: 240px;
`;
export const Body = styled.View`
background-color: #141414;
border-top-left-radius: 50px;
border-top-right-radius: 50px;
margin-top: -50px;
`;
export const FruitInfoArea = styled.View`
flex-direction: row;
margin-top: -30px;
`;
export const FruitAvatar = styled.Image`
width: 110px;
height: 110px;
border-radius: 20px;
margin-left:30px;
margin-right: 20px;
border-width:4px;
border-color:#141414;
`;
export const FruitFavIcon = styled.TouchableOpacity`
width: 40px;
height: 40px;
justify-content:center;
align-items: center;
margin-right: 20px;
margin-left: 20px;
margin-top: 28px;
`;
export const FruitInfoName = styled.Text`
    color: #d4af37;
    font-size: 18px;
    font-weight: bold;
    margin-top: 25px;
    margin-bottom: 10px;
`;
export const FruitPreco = styled.Text`
    color: #d4af37;
    font-size: 18px;
    font-weight: bold;
`;
export const FruitInfo = styled.View`
flex: 1;
justify-content: flex-end;
`;
export const DescriptionArea = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;
export const DescriptionText = styled.Text`
font-size: 30px;
color: #ffa214;
margin-right: 15px;
margin-left: 15px;
margin-top:15px;
`;
export const TreasureArea = styled.TouchableOpacity`
margin-top: 80px;
`;
export const TreasureItem = styled.View`
background-color: #ff6000;
padding: 15px;
border-radius: 10px;
height: 110px;
margin-left: 40px;
margin-right: 40px;
flex-direction: row;
justify-content: space-between;
`;
export const TreasureText = styled.Text`
color: #ffffff;
font-size: 30px;
`;
export const TreasureInfo = styled.View`
flex: 1;
`;
export const BackButton = styled.TouchableOpacity`
position: absolute;
left: 0;
top: 0;
z-index: 9;
`;
