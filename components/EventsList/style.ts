import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 0.7,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 12,
        marginHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingVertical: 12,
    },
    eventItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        padding: 6,
    },
    eventDate: {
        fontSize: 12,
    },
    eventDescription: {
        fontSize: 12,
    },
    eventCategory: {
        fontSize: 12,
    },
    deletButtonTxt: {
        fontSize: 12,
        color: '#151E26',
    },
});

export default styles;