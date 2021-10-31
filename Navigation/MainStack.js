import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from '../Screens/HomeScreen';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'} 
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
