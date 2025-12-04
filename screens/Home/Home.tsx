import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import SelectDropdown from 'react-native-select-dropdown'

import { getDBConnection, createTable, getEventItems, saveEventItems, deleteEventItem } from "../../services/db-service";

import { eventItem } from "../../models/EventItemModel";

import styles from "./style";

const mockData: eventItem[] = [
    {
        id: 1,
        date: new Date("2025-12-01"),
        description: "Event 1",
        category: "Category 1"
    },
    {
        id: 2,
        date: new Date("2025-12-02"),
        description: "Event 2",
        category: "Category 2"
    },
    {
        id: 3,
        date: new Date("2025-12-03"),
        description: "Event 3",
        category: "Category 3"
    }
];

const mockData2: eventItem[] = [
    {
        id: 1,
        date: new Date("2022-11-16"),
        description: "Paari",
        category: "Birthday"
    }
];

const Home = () => {

    const [events, setEvents] = useState<eventItem[]>([]);

    // load data from db
    const loadDataCallback = useCallback(async () => {
        try {
            const initEvents = mockData;
            const db = await getDBConnection();
            await createTable(db);
            const storedEventItems = await getEventItems(db);
            if (storedEventItems.length) {
                setEvents(storedEventItems);
            } else {
                await saveEventItems(db, initEvents);
                setEvents(initEvents);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback]);

    // const [date, setDate] = React.useState<string>("");
    const [date, setDate] = useState<Date>(new Date());
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const categories = ["Birthday", "Wedding", "Recurring", "Memorial", "Others"];
    const [filter, setFilter] = useState<string>("");
    const filters = ["All", "This Week", "This Month"];

    const handleAddEvent = async (eventItem: eventItem) => {
        if (!eventItem.description.trim() || !eventItem.category.trim()) return;
        try {
            const newEventItem = eventItem;
            setEvents([...events, newEventItem]);
            const db = await getDBConnection();
            await saveEventItems(db, [newEventItem]);
            setDate(new Date());
            setDescription("");
            setCategory("");
        } catch (error) {
            console.error(error);
        }
    };

    // delete item
    const handleDeleteEvent = async (id: number) => {
        try {
            const db = await getDBConnection();
            await deleteEventItem(db, id);
            setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    // useEffect(() => {
    //     setEvents(mockData);
    // }, []);

    // const handleAddEvent = (eventItem: eventItem) => {
    //     setEvents([...events, eventItem]);
    // }

    // const handleDeleteEvent = (id: number) => {
    //     setEvents(events.filter(event => event.id !== id));
    // }

    const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>App Title</Text>
            </View>


            <SelectDropdown
                data={filters}
                onSelect={(selectedItem, index) => {
                    setFilter(selectedItem)
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

            <ScrollView style={styles.eventsContainer}>
                {events.map((item, index) => (
                    <View key={index} style={styles.eventItem}>
                        <Text style={styles.eventDate}>{item.date.toString().slice(4, 10)}</Text>
                        <Text style={styles.eventDescription}>{item.description}</Text>
                        <Text style={styles.eventCategory}>{item.category}</Text>
                        <Pressable onPress={() => handleDeleteEvent(item.id)}>
                            <Text style={styles.deletButtonTxt}>Delete</Text>
                        </Pressable>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.addEventContainer}>

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
                    <TextInput style={styles.eventDescriptionInput} placeholder="Description" value={description} onChangeText={setDescription} />
                </View>

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
                        <Text style={styles.addEventButtonTxt}>Add Event</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    );
};

export default Home;