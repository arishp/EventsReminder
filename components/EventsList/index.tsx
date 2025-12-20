import { ScrollView, View, Pressable, Text } from "react-native";
import styles from "./style";
import { Pencil, Trash2 } from 'lucide-react-native';

import { eventItem } from "../../models/EventItemModel";

interface EventsListProps {
    sortedEvents: eventItem[];
    handleEditEvent: (id: number) => void;
    handleDeleteEvent: (id: number) => void;
}

const EventsList = (props: EventsListProps) => {
    console.log(props.sortedEvents);
    console.log('printed eventslist')
    return (
        <View style={styles.sectionContainer}>
            {/* Events */}
            <ScrollView>

                {props.sortedEvents.map((item, index) => (
                    <View key={index} style={styles.eventItem}>

                        <View style={styles.eventDateContainer}>
                            <Text style={styles.eventMonthText}>{item.date.toString().slice(4, 7)}</Text>
                            <Text style={styles.eventDateText}>{item.date.toString().slice(8, 10)}</Text>
                        </View>
                        <View style={styles.eventDetailsContainer}>
                            <Text style={styles.eventDescription}>{item.description}</Text>
                            <Text style={styles.eventCategory}>{item.category}</Text>
                        </View>
                        <View style={styles.editDeleteContainer}>
                            <Pressable onPress={() => props.handleEditEvent(item.id)}>
                                <Pencil size={18} color={'gray'} />
                            </Pressable>
                            <Pressable onPress={() => props.handleDeleteEvent(item.id)}>
                                <Trash2 size={18} color={'gray'} />
                            </Pressable>
                        </View>

                    </View>
                ))}
            </ScrollView>

        </View>
    );
};

export default EventsList;
