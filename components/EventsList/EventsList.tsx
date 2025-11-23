import { FlatList, Text, View } from "react-native";
import Event from "../Event/Event";
import { EventEntry } from "../../data/types/events";
import styles from "./style";

const EventsList = ({ events }: { events: EventEntry[] }) => {

    if (events.length === 0) {
        return <Text>No events to display</Text>;
    }

    return (
        <View style={styles.eventListContainer}>
            <FlatList
                data={events}
                renderItem={({ item }) => (
                    <Event
                        key={item.id}
                        id={item.id}
                        category={item.category}
                        date={item.date}
                        description={item.description} />
                )} />
        </View>
    );
}

export default EventsList;