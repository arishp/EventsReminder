import React, { useState, useEffect, useCallback } from "react";
import { View, Pressable } from 'react-native';
import AddEvent from "../../components/AddEvent";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { getDBConnection, createTable, getEventItems, saveEventItems, deleteEventItem } from "../../services/db-service";

import { eventItemType } from '../../types/EventItemType'
import { mockEventsData } from '../../mockData/MockEventsData'

import styles from "./style";

import Header from "../../components/Header";
import EventsList from "../../components/EventsList";
import Divider from "../../components/Divider";

const Home = () => {

    const [events, setEvents] = useState<eventItemType[]>([]);

    // load data from db
    const loadDataCallback = useCallback(async () => {
        try {
            const initEvents = mockEventsData;
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
    const categories = ["Birthday", "Wedding day", "Recurring", "Memorial", "Others"];
    const [category, setCategory] = useState<string>(categories[0]);
    const filters = ["All", "Next 7 days", "Next 30 days"];
    const [filter, setFilter] = useState<string>(filters[0]);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [editId, setEditId] = useState<number>(0);

    const handleDateChange = (newDate: Date) => {
        setDate(newDate);
        setIsEdit(false);
        setEditId(0);
    };

    const handleDescriptionChange = (text: string) => {
        setDescription(text);
        setIsEdit(false);
        setEditId(0);
    };

    const handleCategoryChange = (newCategory: string) => {
        setCategory(newCategory);
        setIsEdit(false);
        setEditId(0);
    };

    const handleFilterEvent = (selectedFilter: string) => {
        setDate(new Date());
        setDescription("");
        setCategory(categories[0]);
        setFilter(selectedFilter);
        setIsEdit(false);
        setEditId(0);
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

    const handleAddEvent = async (eventItem: eventItemType) => {
        if (!eventItem.description.trim() || !eventItem.category.trim()) {
            setDate(new Date());
            setDescription("");
            setCategory(categories[0]);
            setIsEdit(false);
            setEditId(0);
            return;
        }
        try {
            const newEventItem = eventItem;
            setEvents([...events, newEventItem]);
            const db = await getDBConnection();
            await saveEventItems(db, [newEventItem]);
            setDate(new Date());
            setDescription("");
            setCategory(categories[0]);
            setIsEdit(false);
            setEditId(0);
        } catch (error) {
            console.error(error);
        }
    };

    const handleEditEvent = async (id: number) => {
        setDate(new Date());
        setDescription("");
        setCategory(categories[0]);
        setIsEdit(true);
        setEditId(id);
    };

    const handleEditEventSubmit = async (eventItem: eventItemType) => {
        try {
            const db = await getDBConnection();
            await saveEventItems(db, [eventItem]);
            setEvents(prevEvents => prevEvents.map(event => event.id === eventItem.id ? eventItem : event));
            setIsEdit(false);
            setEditId(0);
        } catch (error) {
            console.error(error);
        }
    }

    const handleEditEventCancel = () => {
        setIsEdit(false);
        setEditId(0);
    }

    // delete item
    const handleDeleteEvent = async (id: number) => {
        setDate(new Date());
        setDescription("");
        setCategory(categories[0]);
        try {
            const db = await getDBConnection();
            await deleteEventItem(db, id);
            setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
            setIsEdit(false);
            setEditId(0);
        } catch (error) {
            console.error(error);
        }
    };

    const handleBackgroundPress = () => {
        setDate(new Date());
        setDescription("");
        setCategory(categories[0]);
        setIsEdit(false);
        setEditId(0);
    };

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                {/* <Pressable style={styles.container} onPress={handleBackgroundPress}> */}
                <Header
                    filters={filters}
                    handleFilterEvent={handleFilterEvent}
                />
                <EventsList
                    sortedEvents={sortedEvents}
                    isEdit={isEdit}
                    editId={editId}
                    handleEditEvent={handleEditEvent}
                    handleEditEventSubmit={handleEditEventSubmit}
                    handleEditEventCancel={handleEditEventCancel}
                    categories={categories}
                    handleDeleteEvent={handleDeleteEvent}
                />
                <Divider />
                <AddEvent
                    date={date}
                    setDate={handleDateChange}
                    description={description}
                    setDescription={handleDescriptionChange}
                    category={category}
                    setCategory={handleCategoryChange}
                    handleAddEvent={handleAddEvent}
                    categories={categories}
                />
                {/* </Pressable> */}
            </View>
        </SafeAreaProvider>
    );
};

export default Home;