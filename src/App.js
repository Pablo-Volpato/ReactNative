import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './stacks/Main';
import TreasureProvider from './contexts/TreasureProvider'
const App = () =>{
  return (
      <TreasureProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
      </TreasureProvider>
   
  );
}
export default App;