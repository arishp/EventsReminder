/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState, useEffect } from 'react';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { SQLiteProvider } from 'expo-sqlite';
import Title from './components/Title/Title';
import EventsList from './components/EventsList/EventsList';
import AddEvent from './components/AddEvent/AddEvent';
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
        <Title title="Events" />
        <EventsList events={events} />
        <AddEvent setEvents={setEvents} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

