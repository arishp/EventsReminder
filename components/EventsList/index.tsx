import { ScrollView, View, Pressable, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import styles from "./style";

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
        <View>
            {/* Events */}
            {/* <ScrollView style={styles.eventsContainer}>
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
            </ScrollView> */}

            <Carousel
            width={430}
            data={props.sortedEvents}
            renderItem={({index}:{index: number}) => 
                (
                                        <View key={index} style={styles.eventItem}>
                        <Text style={styles.eventDate}>{props.sortedEvents[index].date.toString().slice(4, 10)}</Text>
                        <Text style={styles.eventDescription}>{props.sortedEvents[index].description}</Text>
                        <Text style={styles.eventCategory}>{props.sortedEvents[index].category}</Text>
                        <Pressable onPress={() => props.handleEditEvent(props.sortedEvents[index].id)}>
                            <Text style={styles.deletButtonTxt}>Edit</Text>
                        </Pressable>
                        <Pressable onPress={() => props.handleDeleteEvent(props.sortedEvents[index].id)}>
                            <Text style={styles.deletButtonTxt}>Delete</Text>
                        </Pressable>
                    </View>
                )
            }
            />
        </View>
    );
};

export default EventsList;
