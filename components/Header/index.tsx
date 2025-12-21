import { Text, View, Pressable, Switch } from "react-native";
import { CloudSync } from 'lucide-react-native';
import styles from "./style";
import SelectDropdown from "react-native-select-dropdown";

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';

interface HeaderProps {
    filters: string[];
    handleFilterEvent: (selectedItem: string) => void;
}

const Header = (props: HeaderProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.sectionContainer}>
            {/* Title Text */}
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Events</Text>
                <Pressable onPress={() => navigation.navigate('DriveSyncScreen')}>
                    <CloudSync size={24} />
                </Pressable>
            </View>

            <View style={styles.filterRow}>
                {/* Filter Dropdown*/}
                <SelectDropdown
                    data={props.filters}
                    onSelect={(selectedItem, index) => {
                        props.handleFilterEvent(selectedItem);
                    }}
                    renderButton={(selectedItem) => {
                        return (
                            <View style={styles.dropdownButtonStyle}>
                                <Text style={styles.dropdownButtonTxtStyle}>
                                    {(selectedItem && selectedItem) || 'Filter'}
                                </Text>
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                            </View>
                        );
                    }}
                />
                <View style={styles.notifyContainer}>
                    <Text style={styles.notifyText}>Notify</Text>
                    <Switch />
                </View>
            </View>

        </View>
    );
};

export default Header;
