import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 0.15,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: 'gray',
        marginTop: 48,
        marginHorizontal: 18,
        paddingBottom: 18,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        // backgroundColor: 'red',
    },
    backButtonContainer: {
        width: '5%',
    },
    titleTextContainer: {
        width: '95%',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        // backgroundColor: 'blue',
    },
});

export default styles;