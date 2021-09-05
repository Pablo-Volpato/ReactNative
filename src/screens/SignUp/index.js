import React,{useState} from 'react';
import {ScrollView, Alert} from 'react-native';
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
import IconUser from '../../assets/user.svg';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
// import Cadastro from '../../services/UserService'
export default () => {
    const[username,SetUsername] = useState('');
    const[password,SetPassword] = useState('');
    const[name,SetName] = useState('');
    const navigation = useNavigation();
    const handleMessageClick = () =>{
    navigation.reset({
        routes:[{name:'SignIn'}]
    })
    }
    const handleRegisterClick =async()=>{
        await axios.post('https://api-akuma-no-mi.herokuapp.com/api/users',{
      nome:`${name}`,
      usuario: `${ username }`,
      senha: `${password}`
      
        }).then((response) =>{
            Alert.alert('Olá Pirata!', 'Você está oficialmente cadastrado em nossa aventura!!!')
        navigation.navigate('SignIn');

        }).catch(function (error){

        })
        
    }
    return (
        <Container>
            <ScrollView>
            <Bau/>
            <InputArea>
            <InputSign IconSvg={IconUser} placeholder='Nome Completo' value={name} onChangeText={t=>SetName(t)}/>
            <InputSign IconSvg={IconUserName} placeholder='Nome de usuário' value={username} onChangeText={t=>SetUsername(t)}/>
            <InputSign IconSvg={IconLock} placeholder='Senha' value={password} onChangeText={t=>SetPassword(t)} password={true}/>
            <CustomButton onPress={handleRegisterClick} >
                <CustomButtonText>Cadastre-se</CustomButtonText>
            </CustomButton>
            </InputArea>
            <SignMessage onPress={handleMessageClick}>
                <SignMessageText>Ja possui uma conta ? </SignMessageText>
                <SignMessageBold>Login</SignMessageBold>
            </SignMessage>
            </ScrollView>
        </Container>
    );
}