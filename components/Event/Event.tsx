import { View, Text, Alert } from 'react-native';
import { EventEntry } from '../../data/types/events';

const Event: React.FC<EventEntry> = ({ category, date, description }) => {
    const handleEditClick = () => {
        Alert.alert('Edit', 'Edit event');
    }
    const handleDeleteClick = () => {
        Alert.alert('Delete', 'Delete event');
    }
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold' }}>{date}</Text>
            <Text style={{ fontWeight: 'bold' }}>{description}</Text>
            <Text style={{ fontWeight: 'bold' }}>{category}</Text>
            <Text onPress={() => handleEditClick()}>Edit</Text>
            <Text onPress={() => handleDeleteClick()}>Delete</Text>
        </View>
    );
}

export default Event;