import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const styles = StyleSheet.create({
    eventEntryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 14,
        fontFamily: getFontFamily('Inter', 'normal')
    }
});

export default styles;