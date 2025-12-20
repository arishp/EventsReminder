import { eventItemType } from '../types/EventItemType';

export const mockEventsData: eventItemType[] = [
    {
        id: 1,
        date: new Date("2025-12-01"),
        description: "Event 1",
        category: "Category 1"
    },
    {
        id: 2,
        date: new Date("2025-12-02"),
        description: "Event 2",
        category: "Category 2"
    },
    {
        id: 3,
        date: new Date("2025-12-03"),
        description: "Event 3",
        category: "Category 3"
    }
];