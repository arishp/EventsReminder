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
        borderBottomColor: '#e2e2e2ff',
        paddingBottom: 18,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        paddingRight: 12,
    },
    titleText: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    filterRow: {
        // backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropdownButtonStyle: {
        width: '40%',
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
        borderBottomWidth: 1,
        borderBottomColor: '#e2e2e2ff',
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 14,
        color: '#505050ff',
    },
    notifyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    notifyText: {
        fontSize: 14,
        color: '#505050ff',
        marginRight: 6,
    },
});

export default styles;