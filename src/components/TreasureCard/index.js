import React,{useContext} from 'react';
import styled from 'styled-components'
import {useNavigation} from '@react-navigation/native'
import XIcon from '../../assets/x.svg'
import TreasureContext from '../../contexts/TreasureContext'
const Container = styled.View`
background-color: #141414;
flex: 1 0 21%; 
margin: 15px 0px;
height: 100px;
`;
const FruitButton = styled.TouchableOpacity``;
const FruitImage = styled.Image`
width: 88px;
height: 88px;
border-radius: 20px;
`;
const DeleteButton = styled.TouchableOpacity``;

const TreasureCard = ({data}) => {
    const {removeItem} = useContext(TreasureContext)
    const navigation = useNavigation()
    const handleClick = ()=> {
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
        
        <Container>
            <FruitButton onPress = {handleClick}>
                <FruitImage source={{uri:data.imagemFruta}}/>
            </FruitButton>
            <DeleteButton onPress = {()=> {removeItem(data.id)}}>
                 <XIcon fill="#ffffff"/>
            </DeleteButton>
        </Container>
    );
}

export default TreasureCard

