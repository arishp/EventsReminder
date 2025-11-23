import { useState, Dispatch, SetStateAction } from 'react';
import { View, TextInput, Button } from 'react-native';
import { EventEntry } from '../../data/types/events';
import styles from './style';

interface AddEventProps {
    setEvents: Dispatch<SetStateAction<EventEntry[]>>;
}

const AddEvent = ({ setEvents }: AddEventProps) => {
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const handleAddClick = () => {
        if (category && date && description) {
            const newEvent: EventEntry = {
                id: Date.now(),
                category,
                date,
                description,
            };
            setEvents((prevEvents) => [...prevEvents, newEvent]);
            setCategory('');
            setDate('');
            setDescription('');
        }
    }

    return (
        <View style={styles.addEventContainer}>
            <TextInput
                placeholder="Date"
                style={[styles.textInput, { width: '15%' }]}
                value={date}
                onChangeText={setDate}
            />
            <TextInput
                placeholder="Description"
                style={[styles.textInput, { width: '45%' }]}
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                placeholder="Category"
                style={[styles.textInput, { width: '20%' }]}
                value={category}
                onChangeText={setCategory}
            />

            <Button
                title="add"
                onPress={handleAddClick}
            />
        </View>
    );
}

export default AddEvent;
