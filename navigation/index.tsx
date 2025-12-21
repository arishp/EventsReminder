import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import DriveSync from '../screens/DriveSync';

export type RootStackParamList = {
    HomeScreen: undefined;
    DriveSyncScreen: undefined;
};

const NavigationStack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
    return (
        <NavigationStack.Navigator initialRouteName="HomeScreen">
            <NavigationStack.Screen options={{ headerShown: false }} name="HomeScreen" component={Home} />
            <NavigationStack.Screen options={{ headerShown: false }} name="DriveSyncScreen" component={DriveSync} />
        </NavigationStack.Navigator>
    );
}

export default RootStack;



