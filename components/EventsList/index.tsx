import { ScrollView, View, Pressable, Text, TextInput } from "react-native";
import styles from "./style";
import { Pencil, Trash2, Check, X } from 'lucide-react-native';

import { eventItemType } from "../../types/EventItemType";

interface EventsListProps {
    sortedEvents: eventItemType[];
    isEdit: boolean;
    editId: number;
    handleEditEvent: (id: number) => void;
    handleEditEventSubmit: (eventItem: eventItemType) => void;
    handleEditEventCancel: () => void;
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

                    // if edit is not clicked
                    (props.isEdit && item.id === props.editId) ?
                        (
                            <View key={index} style={styles.eventItem}>

                                <View style={styles.eventDateContainer}>
                                    <Text style={styles.eventMonthText}>{item.date.toString().slice(4, 7)}</Text>
                                    <Text style={styles.eventDateText}>{item.date.toString().slice(8, 10)}</Text>
                                </View>
                                <View style={styles.eventDetailsContainer}>

                                    <TextInput
                                        placeholder="Description"
                                        value={item.description}
                                    />

                                    <TextInput
                                        placeholder="Category"
                                        value={item.category}
                                    />

                                </View>
                                <View style={styles.editDeleteContainer}>
                                    <Pressable onPress={() => props.handleEditEventSubmit(item)}>
                                        <Check size={18} color={'gray'} />
                                    </Pressable>
                                    <Pressable onPress={() => props.handleEditEventCancel()}>
                                        <X size={18} color={'gray'} />
                                    </Pressable>
                                </View>

                            </View>
                        ) : (

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

                        )
                ))}
            </ScrollView>

        </View>
    );
};

export default EventsList;
