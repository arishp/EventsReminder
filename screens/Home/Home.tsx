import React from "react";
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import AddEventButton from '../../components/AddEventButton/AddEventButton';

import { RootStackParamList } from '../../types/types';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: NavigationProps) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <AddEventButton onPress={()=>{navigation.navigate('AddEvent')}} />
        </View>
    );
};

export default Home;