import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 0.7,
        backgroundColor: 'white',
        marginTop: 16,
        marginHorizontal: 18,
    },
    eventItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#cdcdcdff',
        borderRadius: 12,
        padding: 8,
        marginBottom: 12,
        backgroundColor: 'white',
        elevation: 3,
    },
    eventDateContainer: {
        flexDirection: 'column',
        width: '15%',
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
        textAlign: 'center',
    },
    eventDateText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#505050ff',
        textAlign: 'center',
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
        justifyContent: 'space-between',
        // backgroundColor: '#f2f2f2',
        borderRadius: 12,
    },


    eventItemEdit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#cdcdcdff',
        borderRadius: 12,
        padding: 8,
        marginBottom: 12,
        backgroundColor: 'white',
        elevation: 3,
    },    
    eventDateContainerEdit: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%',
        backgroundColor: '#f3bd67ff',
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 12,
        marginRight: 8,
    },
    eventDescriptionInputContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        height: 36,
    },
    eventDescriptionInput: {
        fontSize: 14,
        color: '#505050ff',
        paddingHorizontal: 6,
        paddingVertical: 6,
    },
});

export default styles;