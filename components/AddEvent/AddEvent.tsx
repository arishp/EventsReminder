import { useState, Dispatch, SetStateAction } from 'react';
import { View, TextInput, Button } from 'react-native';
import { EventEntry } from '../../data/types/events';

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
        <View style={[{ flexDirection: 'row' }]}>
            <TextInput
                placeholder="Category"
                style={{ borderWidth: 1, borderColor: 'black', margin: 5 }}
                value={category}
                onChangeText={setCategory}
            />
            <TextInput
                placeholder="Date"
                style={{ borderWidth: 1, borderColor: 'black', margin: 5 }}
                value={date}
                onChangeText={setDate}
            />
            <TextInput
                placeholder="Description"
                style={{ borderWidth: 1, borderColor: 'black', margin: 5 }}
                value={description}
                onChangeText={setDescription}
            />
            <Button title="Add" onPress={handleAddClick}></Button>
        </View>
    );
}

export default AddEvent;
