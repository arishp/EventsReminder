import { View, Text, Alert } from 'react-native';
import { EventEntry } from '../../data/types/events';
import styles from './style';

const Event: React.FC<EventEntry> = ({ id, category, date, description }) => {
    const handleEditClick = () => {
        Alert.alert('Edit', 'Edit event');
    }
    const handleDeleteClick = () => {
        Alert.alert('Delete', 'Delete event');
    }
    return (
        <View style={styles.eventEntryContainer}>
            <Text style={styles.text}>{date}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>{category}</Text>
            <Text style={styles.text} onPress={() => handleEditClick()}>Edit</Text>
            <Text style={styles.text} onPress={() => handleDeleteClick()}>Delete</Text>
        </View>
    );
}

export default Event;