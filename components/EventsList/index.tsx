import { ScrollView, View, Pressable, Text } from "react-native";

import styles from "./style";

import { eventItem } from "../../models/EventItemModel";

interface EventsListProps {
    sortedEvents: eventItem[];
    handleEditEvent: (id: number) => void;
    handleDeleteEvent: (id: number) => void;
}

const EventsList = (props: EventsListProps) => {
    return (
        <View>
            {/* Events */}
            <ScrollView style={styles.eventsContainer}>
                {props.sortedEvents.map((item, index) => (
                    <View key={index} style={styles.eventItem}>
                        <Text style={styles.eventDate}>{item.date.toString().slice(4, 10)}</Text>
                        <Text style={styles.eventDescription}>{item.description}</Text>
                        <Text style={styles.eventCategory}>{item.category}</Text>
                        <Pressable onPress={() => props.handleEditEvent(item.id)}>
                            <Text style={styles.deletButtonTxt}>Edit</Text>
                        </Pressable>
                        <Pressable onPress={() => props.handleDeleteEvent(item.id)}>
                            <Text style={styles.deletButtonTxt}>Delete</Text>
                        </Pressable>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
};

export default EventsList;
