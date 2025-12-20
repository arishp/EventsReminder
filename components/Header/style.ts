import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 0.15,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 48,
        marginHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingVertical: 12,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    titleText: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    dropdownButtonStyle: {
        width: 120,
        height: 36,
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
        fontSize: 14,
        color: 'gray',
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
});

export default styles;