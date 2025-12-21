import { Text, View, Pressable } from "react-native";
import { ChevronLeft } from 'lucide-react-native';
import styles from "./style";

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';

const HeaderSettings = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.sectionContainer}>
            {/* Title Text */}
            <View style={styles.titleContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <View style={styles.backButtonContainer}><ChevronLeft size={36} /></View>
                </Pressable>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>Drive Sync</Text>
                </View>
            </View>
        </View>
    );
};

export default HeaderSettings;
