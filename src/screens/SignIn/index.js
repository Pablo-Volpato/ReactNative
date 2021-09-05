import React,{useState} from 'react';
import {ScrollView} from 'react-native';
import {
Container,
InputArea,
CustomButton,
CustomButtonText,
SignMessage,
SignMessageBold,
SignMessageText
} from './styles';
import Bau from '../../assets/bau.svg';
import InputSign from '../../components/InputSign/InputSign.js'
import IconUserName from '../../assets/username.svg';
import IconLock from '../../assets/lockIcon.svg';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
export default () => {
    const[user,SetUser] = useState('');
    const[password,SetPassword] = useState('');
    const navigation = useNavigation();
    const handleMessageClick = () =>{
    navigation.reset({
        routes:[{name:'SignUp'}]
    })
    }
    const handleLoginClick =()=>{
         axios.post('https://api-akuma-no-mi.herokuapp.com/api/login',{
            usuario: `${user}`,
            senha: `${password}`
              }).then((response) =>{
                navigation.reset({
                    routes:[{name:'Tab'}]
                })
              }).catch(function (error){
              })
    }
    return (
        <Container>
            <ScrollView>
            <Bau/>
            <InputArea>
            <InputSign IconSvg={IconUserName} placeholder='Nome de usuário' value={user} onChangeText={t=>SetUser(t)}/>
            <InputSign IconSvg={IconLock} placeholder='Senha' value={password} onChangeText={t=>SetPassword(t)} password={true}/>
            <CustomButton onPress={handleLoginClick} >
                <CustomButtonText>LOGIN</CustomButtonText>
            </CustomButton>
            </InputArea>
            <SignMessage onPress={handleMessageClick}>
                <SignMessageText>Ainda não possui uma conta ? </SignMessageText>
                <SignMessageBold>Registre-se</SignMessageBold>
            </SignMessage>
            </ScrollView>
        </Container>
    );
}