import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import axios from 'axios';
import DevilCard from '../../components/DevilCard/index'
import styled from 'styled-components';

const ListArea = styled.View`
margin-top: 10px;
margin-bottom: 30px;
`;
const Scroller = styled.ScrollView`
flex: 1;
padding: 20px;
`;

export default function Search() {

    
    const image = { uri: "https://i.pinimg.com/736x/55/ac/af/55acaffaadd6e747ed50627c72613abf.jpg" }

    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState([]);
    //const [categoriaId, setCategoriaId] = useState('');

    // const handleClickLogia = () => {

    // 		axios.get(`https://api-akuma-no-mi.herokuapp.com/api/fruta/categoria/${7}?pagina=0&qtdRegistros=10`).then((response) => {
    // 			console.log(response.status)
    // 			setCategoria(response.data)

    // 		});
    //     console.log("foi")

    // }

    const handleClick = async (codigo) => {
        setCategoria([]);
        await axios.get(`https://api-akuma-no-mi.herokuapp.com/api/fruta/categoria/${codigo}?pagina=0&qtdRegistros=50`)
        .then((response) => {
        setCategoria(response.data)
        
    })
    console.log(categoria)
}


//  const displayFrutas = 
//  categoria.map((fruta, key) => {
//      return (
//          <DevilCard key={key} fruta={fruta} />
//      );
//  });

// const handleClickParamecia = () => {

//   axios.get(`https://api-akuma-no-mi.herokuapp.com/api/fruta/categoria/${9}?pagina=0&qtdRegistros=50`).then((response) => {
//     console.log(response.status)
//     setCategoria(response.data)

//   });
//   console.log("foi 3")

// }

const handleClickSearch = () => {
    axios.get(`https://api-akuma-no-mi.herokuapp.com/api/fruta/nome/${nome}`)
        .then((response) => {
            console.log(response.status)
            setCategoria(response.data)
            console.log(nome)

        });
    console.log("foi 4")

}

return (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>

            <View style={styles.buttons}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome da Akuma no Mi"
                    onChangeText={setNome}
                    value={nome}
                />

                <TouchableOpacity
                    style={styles.buttonSearch}
                    onPress={handleClickSearch}
                >
                    <Text> Procurar </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttons}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { handleClick(7) }}
                >
                    <Text>Logia</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { handleClick(8) }}
                >
                    <Text>Zoan</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { handleClick(9) }}
                >
                    <Text>Paramecia</Text>
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity
                    style={styles.buttonSearch2}
                    onPress={()=>{setCategoria([])}}
                >
                    <Text> Apagar </Text>
                </TouchableOpacity>
            </View>
            <Scroller>
            <ListArea>
                         {categoria  && categoria.length > 0 ? categoria.map((fruta,k)=>(
                            <DevilCard key={k} data={fruta} />
                         )): <View></View>}
                </ListArea>
            </Scroller>
        </ImageBackground>
    </View>
)
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        opacity: 0.8
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        height: 35,
        backgroundColor: "#ff2a2a",
        borderRadius: 30,
        width: "25%",
        marginTop: 18,
        margin: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttons: {
        flexDirection: "row"
    },
    input: {
        backgroundColor: '#FFF',
        width: '70%',
        marginTop: 20,
        color: '#222',
        fontSize: 12,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: "5%",

    },
    buttonSearch: {
        backgroundColor: "#1E90FF",
        borderRadius: 30,
        borderColor: "#4169E1",
        borderWidth: 1,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonSearch2: {
        backgroundColor: "#ff6000",
        height: 35,
        width: "50%",
        borderRadius: 30,
        borderColor: "#4169E1",
        borderWidth: 1,
        justifyContent: "center",
        alignSelf: "center",
        alignItems:'center'
    }
})