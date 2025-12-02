import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { eventItem } from '../models/EventItemModel';

const tableName = 'eventsTable';

enablePromise(true);

// get db connection
export const getDBConnection = async () => {
  return openDatabase({ name: 'events-db.db', location: 'default' });
};

// create table
export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        id INTEGER PRIMARY KEY NOT NULL,
        date TEXT NOT NULL,
        description TEXT NOT NULL,
        category TEXT NOT NULL
    );`;

  await db.executeSql(query);
};

// get event items
export const getEventItems = async (db: SQLiteDatabase): Promise<eventItem[]> => {
  try {
    const eventItems: eventItem[] = [];
    const results = await db.executeSql(`SELECT id, date, description, category FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        eventItems.push(result.rows.item(index))
      }
    });
    return eventItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

// add or update event items
export const saveEventItems = async (db: SQLiteDatabase, eventItems: eventItem[]) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(id, date, description, category) values` +
    eventItems.map(i => `(${i.id}, '${i.date}', '${i.description}', '${i.category}')`).join(',');

  return db.executeSql(insertQuery);
};

// delete event item
export const deleteEventItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where id = ${id}`;
  await db.executeSql(deleteQuery);
};

// delete table
export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};