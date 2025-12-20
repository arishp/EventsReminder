import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dropdownButtonStyle: {
        width: 90,
        height: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 12,
        color: '#151E26',
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 12,
        color: '#151E26',
    },
    addEventContainer: {
        marginTop: 10,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    calendarContainer: {
        width: 85,
        height: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    calendarButtonTxt: {
        fontSize: 12,
        color: '#151E26',
    },
    eventDescriptionInputContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        paddingHorizontal: 6,
        width: 120,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    eventDescriptionInput: {
        fontSize: 12,
        padding: 0,
    },
    addEventButton: {
        width: 75,
        height: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    addEventButtonTxt: {
        fontSize: 12,
        color: '#151E26',
    },
});

export default styles;