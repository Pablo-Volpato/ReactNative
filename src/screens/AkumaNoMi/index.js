import React,{useState,useEffect,useContext} from 'react'
import {Text} from 'react-native';
import {
Container,
Scroller,
FruitInfoArea,
Body,
DescriptionArea,
TreasureArea,
FruitUser,
FruitAvatar,
FruitFavIcon,
FruitInfoName,
FruitPreco,
FruitInfo,
BackButton,
DescriptionText,
TreasureItem,
TreasureText,
TreasureInfo
} from './styles.js';
import TreasureIcon from '../../assets/smallchest.svg'
import BackIcon from '../../assets/leftarrow.svg'
import HeartIcon from '../../assets/heart.svg'
import {useNavigation,useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import TreasureContext from '../../contexts/TreasureContext'


const AkumaNoMi = () =>{
    const navigation = useNavigation();
    const route = useRoute();
    const {addItem} = useContext(TreasureContext);

    const handleBackClick = () =>{
        navigation.goBack();
    }

    const [fruitInfo,SetFruitInfo] = useState({
        id: route.params.id,
        imagemFruta: route.params.imagemFruta,
        nome: route.params.nome,
        preco: route.params.preco,
        descricao: route.params.descricao,
        imagemUsuario: route.params.imagemUsuario,
        categoria: route.params.categoria
    });
    return(
        <Container>
            <Scroller>
                <FruitUser source={{uri:fruitInfo.imagemUsuario}} />
                <Body>
                    <FruitInfoArea>
                        <FruitAvatar source={{uri:fruitInfo.imagemFruta}}/>
                            <FruitInfo>
                                <FruitInfoName>{fruitInfo.nome}</FruitInfoName>
                                 <FruitPreco>B$:{fruitInfo.preco}</FruitPreco>
                            </FruitInfo>
                            <FruitFavIcon>
                                <HeartIcon fill='#d4af37'/>
                            </FruitFavIcon>
                    </FruitInfoArea>
                    <DescriptionArea>
                        <DescriptionText>{fruitInfo.descricao}</DescriptionText>
                    </DescriptionArea>
                    <TreasureArea onPress={()=>{addItem(fruitInfo)}}>
                        <TreasureItem>
                            <TreasureText>Adicionar Ao Tesouro !!!</TreasureText>
                            <TreasureInfo>
                            <TreasureIcon fill='#ffffff'/>
                            </TreasureInfo>
                        </TreasureItem>
                    </TreasureArea>
                </Body>
                <BackButton onPress={handleBackClick}>
                    <BackIcon fill="#d4af37"/>
                </BackButton>
            </Scroller>
        </Container>
    );
};

export default AkumaNoMi;