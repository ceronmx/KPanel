import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {MainStack} from './Navigation/MainStack';

const App = () => {

  return(
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  )
}

export default App;
