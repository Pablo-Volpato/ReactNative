import React, { useState, useContext } from 'react'
import InputSign from '../../components/InputSign/InputSign.js'
import IconEmail from '../../assets/emailicon.svg';
import { Container, InputArea, SendButton, SendButtonText, MessageText, ImageCheckout, InputView, BackButton, Scroller } from '../Checkout/styles';
import { Alert } from 'react-native';
import BackIcon from '../../assets/leftarrow.svg'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import TreasureContext from '../../contexts/TreasureContext';



const Checkout = () => {
    const [valorTotal,SetValorTotal] = useState(0);
    const context = useContext (TreasureContext);
    const navigation = useNavigation();
    const [email, SetEmail] = useState('')
    const image = { uri: 'https://i.pinimg.com/236x/06/54/84/0654845a0e9e6e5c2c9f67b82f5e8e4d.jpg' }
    const handleFinishClick = async() => {
        context.treasure.map((fruta)=> (SetValorTotal(valorTotal+fruta.preco)))
        console.log(email);
        await axios.post('https://api-akuma-no-mi.herokuapp.com/api/pedidos',{
            email:`${email}`,
            listaFrutas:context.treasure,
            valorTotalDopedido:`${valorTotal}`
        }).then((response) => {
            Alert.alert('Olá Pirata!!!', 'O email de confirmação foi enviado com sucesso!')
            
        }).catch(function(error){
            console.log(error);

        })
    }
    const handleBackClick = () => {
        navigation.goBack();
    }
    return (
        <Container>
            <ImageCheckout source={image}>
                <Scroller>
                    <InputArea>
                        <MessageText>Falta pouco pra você conquistar esse tesouro!!!</MessageText>
                        <InputView>
                            <InputSign IconSvg={IconEmail} placeholder='Email' value={email} onChangeText={t => SetEmail(t)} />
                            <SendButton onPress={handleFinishClick}>
                                <SendButtonText>Finalizar</SendButtonText>
                            </SendButton>
                        </InputView>
                    </InputArea>
                </Scroller>
            </ImageCheckout>
            <BackButton onPress={handleBackClick}>
                <BackIcon fill="#d4af37" />
            </BackButton>

        </Container>
    );
}

export default Checkout;