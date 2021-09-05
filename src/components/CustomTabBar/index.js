import React from 'react';
import styled from 'styled-components';
import HomeIcon from '../../assets/home.svg'
import SearchIcon from '../../assets/search2.svg'
import ChestIcon from '../../assets/smallchest.svg'
import HeartIcon from '../../assets/heart.svg'
import OutIcon from '../../assets/out.svg'

const TabArea = styled.View`
    height: 60px;
    background-color: #371102;
    flex-direction:row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabBar = ({state ,navigation}) =>{

    const goTo = (screenName) =>{
        navigation.navigate(screenName)
    }

    return(
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} fill='#fe7302'/>
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon style={{opacity: state.index===1? 1 : 0.5}} fill='#fe7302'/>
            </TabItem>
            <TabItem onPress={() => goTo('Treasure')}>
                <ChestIcon style={{opacity: state.index===2? 1 : 0.5}}fill='#fe7302'/>
            </TabItem>
            <TabItem onPress={() => goTo('Favorites')}>
                <HeartIcon style={{opacity: state.index===3? 1 : 0.5}} fill='#fe7302'/>
            </TabItem >
            <TabItem onPress={() => goTo('SignOut')}>
                <OutIcon style={{opacity: state.index===4? 1 : 0.5}} fill='#fe7302'/>
            </TabItem>
        </TabArea>
    );
}

export default TabBar;
