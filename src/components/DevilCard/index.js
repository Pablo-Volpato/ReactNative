import React from 'react'
import styled from 'styled-components/native'
import {useNavigation} from '@react-navigation/native'

const Area = styled.TouchableOpacity`
background-color: black;
margin-bottom: 20px;
border-radius: 20px;
padding: 15px;
flex-direction: row;

`;
const Avatar = styled.Image`
width: 88px;
height: 88px;
border-radius: 20px;
`;
const InfoArea = styled.View`
margin-left: 20px;
justify-content: space-between;
`;
const FruitName = styled.Text`
font-size: 17px;
font-weight: bold;
color: #ffa214;
`;
const SeeMore = styled.View`
width: 85px;
height: 26px;
border: 1px solid #ffa214;
border-radius: 10px;
justify-content: center;
align-items: center;
`;
const SeeMoreText = styled.Text`
font-size: 13px;
color: #ffa214;
`;
const FruitCategory = styled.Text`
font-size: 15px;
color: #ffa214;
`;

const Card = ({data}) => {
    const navigation = useNavigation();
    const handleClick=()=>{
        navigation.navigate('AkumaNoMi',{
            id : data.id,
            imagemFruta: data.imagemFruta,
            nome: data.nome,
            descricao: data.descricao,
            preco: data.preco,
            imagemUsuario: data.imagemUsuario,
            categoria:data.categoria
        });
    }
    return(
        <Area onPress={handleClick}>
            <Avatar source={{uri:data.imagemFruta}}/>
            <InfoArea>
                <FruitName>{data.nome}</FruitName>
                <FruitCategory>B$ : {data.preco}</FruitCategory>
                <SeeMore>
                    <SeeMoreText>Ler Sobre</SeeMoreText>
                </SeeMore>
            </InfoArea>
        </Area>
    );
}

export default Card;