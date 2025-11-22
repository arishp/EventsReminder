/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState, useEffect, useRef } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import EventsList from './components/EventsList/EventsList';
import AddEvent from './components/AddEvent/AddEvent';
import { EventEntry } from './data/types/events';
import { mockEvents } from './data/mocks/events';

function App() {

  const [events, setEvents] = useState<EventEntry[]>([]);

  useEffect(() => {
    setEvents(mockEvents);
  }, []);

  const scrollViewRef = useRef<ScrollView>(null);

  const handleTopClick = () => {
    console.log('Top clicked')
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingVertical: 16 }}>Events</Text>
        <ScrollView ref={scrollViewRef}>
          <EventsList events={events} />
        </ScrollView>
        <Button title={"Top"} onPress={handleTopClick}></Button>
        <View style={{ paddingVertical: 16, alignItems: 'center' }}>
          <AddEvent setEvents={setEvents} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
