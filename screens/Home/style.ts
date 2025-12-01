import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
    },
    headerContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    eventsContainer: {
        marginTop: 10,
        borderTopColor: 'gray',
        borderTopWidth: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    eventItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    eventDate: {
        fontSize: 14,
    },
    eventDescription: {
        fontSize: 14,
    },
    eventCategory: {
        fontSize: 14,
    },
    addEventContainer: {
        marginTop: 10,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

});

export default styles;