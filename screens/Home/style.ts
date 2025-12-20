import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default styles;