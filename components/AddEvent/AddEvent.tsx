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
                placeholder="Date"
                style={{ borderWidth: 1, borderColor: 'black', margin: 5, borderRadius: 5, width: '10%', height: 40 }}
                value={date}
                onChangeText={setDate}
            />
            <TextInput
                placeholder="Description"
                style={{ borderWidth: 1, borderColor: 'black', margin: 5, borderRadius: 5, width: '50%', height: 40 }}
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                placeholder="Category"
                style={{ borderWidth: 1, borderColor: 'black', margin: 5, borderRadius: 5, width: '20%', height: 40 }}
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
