import React,{useContext} from 'react'
import {Text} from 'react-native'
import {Container,CardContainer,ButtonContainer, FinishButton,FinishText,ClearButton,ClearText, Scroller} from './styles';
import TreasureContext from '../../contexts/TreasureContext'
import TreasureCard from '../../components/TreasureCard';
import {useNavigation} from '@react-navigation/native'

const Home = () =>{
    const context = useContext(TreasureContext)
    const {clearTreasure} = useContext(TreasureContext)
    console.log(context.treasure)
    const navigation = useNavigation();
    return(
        <Container>
            <Scroller>
            <CardContainer>
            {context.treasure.map((fruta, k) => (
                        <TreasureCard key={k} data={fruta} />
                    ))}
            </CardContainer>
            </Scroller>
            <ButtonContainer>
                <FinishButton onPress = {()=> navigation.navigate('Checkout')}>
                    <FinishText>Finalizar Pedido</FinishText>
                </FinishButton> 
                <ClearButton onPress = { ()=> {clearTreasure()}}>
                    <ClearText>Limpar Tesouro</ClearText>
                </ClearButton>
            </ButtonContainer>
        </Container>
    );
}

export default Home;