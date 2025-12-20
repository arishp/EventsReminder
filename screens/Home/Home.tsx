import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import AddEvent from "../../components/AddEvent";

import { getDBConnection, createTable, getEventItems, saveEventItems, deleteEventItem } from "../../services/db-service";

import { eventItem } from "../../models/EventItemModel";

import styles from "./style";

import Header from "../../components/Header";
import EventsList from "../../components/EventsList";
import Divider from "../../components/Divider";

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
    const filters = ["All", "Next 7 days", "Next 30 days"];

    const handleFilterEvent = (selectedFilter: string) => {
        setFilter(selectedFilter);
    };

    const filteredEvents = events.filter(event => {
        if (filter === "All" || filter === "") return true;
        const eventDate = new Date(event.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        eventDate.setFullYear(today.getFullYear());
        eventDate.setHours(0, 0, 0, 0);

        if (eventDate.getTime() < today.getTime()) {
            eventDate.setFullYear(today.getFullYear() + 1);
        }

        const diffTime = eventDate.getTime() - today.getTime();

        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (filter === "Next 7 days") {
            return diffDays >= 0 && diffDays <= 7;
        } else if (filter === "Next 30 days") {
            return diffDays >= 0 && diffDays <= 30;
        }
        return true;
    });

    const sortedEvents = filteredEvents.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        const monthA = dateA.getMonth();
        const monthB = dateB.getMonth();

        if (monthA !== monthB) {
            return monthA - monthB;
        }

        const dayA = dateA.getDate();
        const dayB = dateB.getDate();

        return dayA - dayB;
    });

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

    const handleEditEvent = async (id: number) => {
        console.log("Edit event on item id: ", id);
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



    return (
        <View style={styles.container}>
            <Header
                filters={filters}
                handleFilterEvent={handleFilterEvent}
            />
            <EventsList
                sortedEvents={sortedEvents}
                handleEditEvent={handleEditEvent}
                handleDeleteEvent={handleDeleteEvent}
            />
            <Divider />
            <AddEvent
                date={date}
                setDate={setDate}
                description={description}
                setDescription={setDescription}
                category={category}
                setCategory={setCategory}
                handleAddEvent={handleAddEvent}
                categories={categories}
            />
        </View>
    );
};

export default Home;