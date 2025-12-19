import { ScrollView, View, Pressable, Text, TextInput } from "react-native";
import DatePicker from 'react-native-date-picker';
import SelectDropdown from 'react-native-select-dropdown'

import styles from "./style";

interface AddEventProps {
    calendarOpen: boolean;
    setCalendarOpen: (open: boolean) => void;
    date: Date;
    setDate: (date: Date) => void;
    description: string;
    setDescription: (description: string) => void;
    category: string;
    setCategory: (category: string) => void;
    handleAddEvent: (event: Event) => void;
    categories: string[];
}

const AddEvent = (props: AddEventProps) => {
    return (
        <View style={styles.addEventContainer}>

            <View style={styles.calendarContainer}>
                <Pressable onPress={() => props.setCalendarOpen(true)}>
                    <Text style={styles.calendarButtonTxt}>{props.date.toString().slice(4, 15)}</Text>
                </Pressable>
            </View>
            <DatePicker
                modal
                open={props.calendarOpen}
                date={props.date}
                onConfirm={(date) => {
                    props.setCalendarOpen(false)
                    props.setDate(date)
                }}
                onCancel={() => {
                    props.setCalendarOpen(false)
                }}
                mode="date" />

            <View style={styles.eventDescriptionInputContainer}>
                <TextInput style={styles.eventDescriptionInput} placeholder="Description" value={props.description} onChangeText={props.setDescription} />
            </View>

            <SelectDropdown
                data={props.categories}
                onSelect={(selectedItem, index) => {
                    props.setCategory(selectedItem)
                }}
                renderButton={(selectedItem) => {
                    return (
                        <View style={styles.dropdownButtonStyle}>
                            <Text style={styles.dropdownButtonTxtStyle}>
                                {(selectedItem && selectedItem) || 'Category'}
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

            <View style={styles.addEventButton}>
                <Pressable onPress={() => props.handleAddEvent({
                    id: Date.now(),
                    date: props.date,
                    description: props.description,
                    category: props.category
                })}>
                    <Text style={styles.addEventButtonTxt}>Add Event</Text>
                </Pressable>
            </View>

        </View>
    );
};

export default AddEvent;
