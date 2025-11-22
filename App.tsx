/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import AddEvent from './components/AddEvent/AddEvent';
import Event from './components/Event/Event';
import { EventEntry } from './data/types/events';
import { mockEvents } from './data/mocks/events';


function App() {
  const [events, setEvents] = useState<EventEntry[]>([]);

  useEffect(() => {
    setEvents(mockEvents);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingVertical: 16 }}>Events</Text>
        <ScrollView>
          {events.map((event, index) => (
            <Event key={index} category={event.category} date={event.date} description={event.description} />
          ))}
        </ScrollView>
        <View style={{ paddingVertical: 16, alignItems: 'center' }}>
          <AddEvent setEvents={setEvents} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
