import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import DatePicker from 'react-native-date-picker';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './style';
import { eventItemType } from '../../types/EventItemType';

interface AddEventProps {
    date: Date;
    setDate: (date: Date) => void;
    description: string;
    setDescription: (description: string) => void;
    category: string;
    setCategory: (category: string) => void;
    handleAddEvent: (event: eventItemType) => void;
    categories: string[];
}

const AddEvent: React.FC<AddEventProps> = ({
    date,
    setDate,
    description,
    setDescription,
    category,
    setCategory,
    handleAddEvent,
    categories
}) => {
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

    return (
        <View style={styles.sectionContainer}>

            <Text style={styles.sectionTitle}>NEW EVENT</Text>

            <View style={styles.dateNameContainer}>
                <View style={styles.calendarContainer}>
                    <Pressable onPress={() => setCalendarOpen(true)}>
                        <Text style={styles.calendarButtonTxt}>{date.toString().slice(4, 15)}</Text>
                    </Pressable>
                </View>
                <DatePicker
                    modal
                    open={calendarOpen}
                    date={date}
                    onConfirm={(date) => {
                        setCalendarOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setCalendarOpen(false)
                    }}
                    mode="date" />

                <View style={styles.eventDescriptionInputContainer}>
                    <TextInput
                        style={styles.eventDescriptionInput}
                        placeholder="Description"
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>
            </View>


            <View style={styles.categoryButtonContainer}>

                <SelectDropdown
                    data={categories}
                    onSelect={(selectedItem, index) => {
                        setCategory(selectedItem)
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
                    <Pressable onPress={() => handleAddEvent({
                        id: Date.now(),
                        date: date,
                        description: description,
                        category: category
                    })}>
                        <Text style={styles.addEventButtonTxt}> +   Add</Text>
                    </Pressable>
                </View>


            </View>


        </View>
    );
};

export default AddEvent;
