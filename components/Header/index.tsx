import { Text, View } from "react-native";
import { Settings } from 'lucide-react-native';
import styles from "./style";
import SelectDropdown from "react-native-select-dropdown";

interface HeaderProps {
    filters: string[];
    handleFilterEvent: (selectedItem: string) => void;
}

const Header = (props: HeaderProps) => {
    return (
        <View style={styles.sectionContainer}>
            {/* Title Text */}
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Events</Text>
                <Settings />
            </View>

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

        </View>
    );
};

export default Header;
