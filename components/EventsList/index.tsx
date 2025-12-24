import { useState, useEffect } from "react";
import { ScrollView, View, Pressable, Text, TextInput } from "react-native";
import styles from "./style";
import { Pencil, Trash2, Check, X } from 'lucide-react-native';
import DatePicker from 'react-native-date-picker';
import SelectDropdown from 'react-native-select-dropdown';

import { eventItemType } from "../../types/EventItemType";

interface EventsListProps {
    sortedEvents: eventItemType[];
    isEdit: boolean;
    editId: number;
    handleEditEvent: (id: number) => void;
    handleEditEventSubmit: (eventItem: eventItemType) => void;
    handleEditEventCancel: () => void;
    categories: string[];
    handleDeleteEvent: (id: number) => void;
}

const EventsList = (props: EventsListProps) => {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        if (props.isEdit && props.editId) {
            const item = props.sortedEvents.find(e => e.id === props.editId);
            if (item) {
                setDescription(item.description);
                setCategory(item.category);
                setDate(new Date(item.date));
            }
        }
    }, [props.isEdit, props.editId, props.sortedEvents]);

    return (
        <View style={styles.sectionContainer}>
            {/* Events */}
            <ScrollView>

                {props.sortedEvents.map((item, index) => (


                    (props.isEdit && item.id === props.editId) ?
                        (
                            // if edit is clicked
                            <View key={index} style={styles.eventItemEdit}>

                                <View style={styles.eventDateContainerEdit}>
                                    <Pressable onPress={() => setCalendarOpen(true)}>
                                        <Text style={styles.eventMonthText}>{date.toString().slice(4, 7)}</Text>
                                        <Text style={styles.eventDateText}>{date.toString().slice(8, 10)}</Text>
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

                                <View style={styles.eventDetailsContainer}>

                                    <View style={styles.eventDescriptionInputContainer}>
                                        <TextInput
                                            style={styles.eventDescriptionInput}
                                            placeholder="Description"
                                            value={description}
                                            onChangeText={setDescription}
                                        />
                                    </View>

                                    <SelectDropdown
                                        data={props.categories}
                                        defaultValue={item.category}
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

                                </View>
                                <View style={styles.editDeleteContainer}>
                                    <Pressable onPress={() => props.handleEditEventSubmit({ ...item, description, category, date })}>
                                        <Check size={18} color={'gray'} />
                                    </Pressable>
                                    <Pressable onPress={() => props.handleEditEventCancel()}>
                                        <X size={18} color={'gray'} />
                                    </Pressable>
                                </View>

                            </View>
                        ) : (
                            // if edit is not clicked
                            <View key={index} style={styles.eventItem}>

                                <View style={styles.eventDateContainer}>
                                    <Text style={styles.eventMonthText}>{item.date.toString().slice(4, 7)}</Text>
                                    <Text style={styles.eventDateText}>{item.date.toString().slice(8, 10)}</Text>
                                </View>
                                <View style={styles.eventDetailsContainer}>
                                    <Text style={styles.eventDescription}>{item.description}</Text>
                                    <Text style={styles.eventCategory}>{item.category}</Text>
                                </View>
                                <View style={styles.editDeleteContainer}>
                                    <Pressable onPress={() => props.handleEditEvent(item.id)}>
                                        <Pencil size={18} color={'gray'} />
                                    </Pressable>
                                    <Pressable onPress={() => props.handleDeleteEvent(item.id)}>
                                        <Trash2 size={18} color={'gray'} />
                                    </Pressable>
                                </View>

                            </View>

                        )
                ))}
            </ScrollView>

        </View>
    );
};

export default EventsList;
