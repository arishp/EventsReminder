import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
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
});

export default styles;