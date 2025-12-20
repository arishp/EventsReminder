import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 0.7,
        backgroundColor: 'white',
        marginTop: 12,
        marginHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    eventItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#cdcdcdff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        backgroundColor: 'white',
    },
    eventDateContainer: {
        flexDirection: 'column',
        // width: '15%',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 12,
        marginRight: 8,
    },
    eventMonthText: {
        fontSize: 16,
        fontWeight: 'regular',
        color: '#505050ff',
    },
    eventDateText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#505050ff',
    },
    eventDetailsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 12,
        marginRight: 8,
        width: '60%',
    },
    eventDescription: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    eventCategory: {
        fontSize: 12,
        color: '#505050ff',
    },
    editDeleteContainer: {
        width: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // backgroundColor: '#f2f2f2',
        borderRadius: 12,
    },
});

export default styles;