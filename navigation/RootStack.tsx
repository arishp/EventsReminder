import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/Home';
import AddEventScreen from '../screens/AddEvent/AddEvent';

import { RootStackParamList } from '../types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack(){
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='AddEvent' component={AddEventScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
