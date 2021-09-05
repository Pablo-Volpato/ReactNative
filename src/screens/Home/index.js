import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import DevilCard from '../../components/DevilCard'; ` `
import axios from 'axios'
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    LocationArea,
    LocationInput,
    LocationFinder,
    LoadingIcon,
    LoadingIcon2,
    ListArea,
    MoreButton,
    MoreText
} from './styles';
import SearchIcon from '../../assets/search.svg'
import MapIcon from '../../assets/map.svg'
const Home = () => {
    const navigation = useNavigation();

    const [list, SetList] = useState([]);
    const [loading, SetLoading] = useState(false);
    const [loading2, SetLoading2] = useState(false);
    const [location, SetLocation] = useState();
    const [coords, SetCoords] = useState();
    const [offset, SetOffset] = useState(5);

    const handleLocationFinder = async () => {
        SetCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );
        if (result == 'granted') {
            SetLoading(true);
            SetLocation('');
            SetList([]);

            Geolocation.getCurrentPosition((info) => {
                console.log(info)
                SetLocation('Coordenadas Adiquiridas')
                SetCoords(info.coords);
                getFrutas();
            });
        }
    }

    const getFrutas = async () => {
        SetLoading2(true)
        await axios.get('https://api-akuma-no-mi.herokuapp.com/api/fruta?pagina=0&qtdRegistros=' + offset)
            .then((response) => {
                SetOffset(offset + 3);
                SetList(response.data)
                SetLoading(false);
                SetLoading2(false);
            }).catch(function (error) {
                console.log(console.error())
            });
    }

    useEffect(() => {
        getFrutas()
    }, [])

    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre A fruta Mais Adequada Para Você</HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <SearchIcon fill='#ff7314' />
                    </SearchButton>
                </HeaderArea>
                <LocationArea>
                    <LocationInput placeholder='Onde Você está ?' placeholderTextColor='gray' value={location} onChangeText={t => SetLocation(t)} />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MapIcon fill='#ff7314' />
                    </LocationFinder>
                </LocationArea>
                {loading &&
                    <LoadingIcon size='large' color='ocenblue' />
                }
                <ListArea>
                    {list.map((fruta, k) => (
                        <DevilCard key={k} data={fruta} />
                    ))}
                </ListArea>
                <MoreButton
                    activeOpacity={0.9}
                    onPress={getFrutas}
                >
                    <MoreText >Carregar mais frutas</MoreText>
                    {loading2 &&
                        <LoadingIcon2
                            color="#800000"
                        />
                    }
                </MoreButton>
            </Scroller>
        </Container>

    );
}

export default Home;