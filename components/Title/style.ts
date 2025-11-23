import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontFamily: getFontFamily('Inter', 'bold'),
        margin: 10,
    },
});

export default styles;
