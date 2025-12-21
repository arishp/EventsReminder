import React from "react";
import { View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";

import styles from "./style";

import HeaderSettings from "../../components/HeaderSettings";


const DriveSync = () => {

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <HeaderSettings />
            </View>
        </SafeAreaProvider>
    );
};

export default DriveSync;