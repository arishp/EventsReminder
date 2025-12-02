import React, { useEffect,useCallback } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';

import { getDBConnection, createTable, getEventItems, saveEventItems, deleteEventItem } from "../../services/db-service";

import { eventItem } from "../../models/EventItemModel";

import styles from "./style";

const mockData: eventItem[] = [
    {
        id: 1,
        date: "2025-12-01",
        description: "Event 1",
        category: "Category 1"
    },
    {
        id: 2,
        date: "2025-12-02",
        description: "Event 2",
        category: "Category 2"
    },
    {
        id: 3,
        date: "2025-12-03",
        description: "Event 3",
        category: "Category 3"
    }
];

const mockData2: eventItem[] = [
    {
        id: 1,
        date: "2022-11-16",
        description: "Paari",
        category: "Birthday"
    }
];

const Home = () => {

    const [events, setEvents] = React.useState<eventItem[]>([]);

    // load data from db
    const loadDataCallback = useCallback(async () => {
        try {
        const initEvents = mockData2;
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

    const [date, setDate] = React.useState<string>("");
    const [description, setDescription] = React.useState<string>("");
    const [category, setCategory] = React.useState<string>("");

    const handleAddEvent = async (eventItem: eventItem) => {
        if (!eventItem.date.trim() || !eventItem.description.trim() || !eventItem.category.trim()) return;
        try {
            const newEventItem = eventItem;
            setEvents([...events, newEventItem]);
            const db = await getDBConnection();
            await saveEventItems(db, [newEventItem]);
            setDate("");
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

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>App Title</Text>
            </View>

            <ScrollView style={styles.eventsContainer}>
                {events.map((item, index) => (
                    <View key={index} style={styles.eventItem}>
                        <Text style={styles.eventDate}>{item.date}</Text>
                        <Text style={styles.eventDescription}>{item.description}</Text>
                        <Text style={styles.eventCategory}>{item.category}</Text>
                        <Pressable onPress={() => handleDeleteEvent(item.id)}>
                            <Text>Delete</Text>
                        </Pressable>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.addEventContainer}>
                <TextInput placeholder="Date" onChangeText={setDate} />
                <TextInput placeholder="Event Description" onChangeText={setDescription} />
                <TextInput placeholder="Category" onChangeText={setCategory} />
                <Pressable onPress={() => handleAddEvent({
                    id: Date.now(),
                    date: date,
                    description: description,
                    category: category
                })}>
                    <Text>Add Event</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Home;