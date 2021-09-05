import React, {useEffect} from 'react';
import {Container, LoadingIcon} from './styles';
import {Text} from 'react-native';
import Bau from '../../assets/bau.svg'
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
        if (token !== null) {
         
        } else {
        navigation.navigate('SignIn');
        }   
    }
    checkToken();
  }, []);

  return (
    <Container>
      <Bau />
      <LoadingIcon size="large" color="ocenblue" />
    </Container>
  );
}