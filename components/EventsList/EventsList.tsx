import { Text, View } from "react-native";
import Event from "../Event/Event";
import { EventEntry } from "../../data/types/events";

const EventsList = ({ events }: { events: EventEntry[] }) => {

    if (events.length === 0) {
        return <Text>No events to display</Text>;
    }

    return (
        <View>
            {events.map((eventItem, index) => (
                <Event key={index} category={eventItem.category} date={eventItem.date} description={eventItem.description} />
            ))}
        </View>
    );
}

export default EventsList;