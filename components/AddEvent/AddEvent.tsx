import { View, Text, TextInput, Button } from 'react-native';

const AddEvent = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TextInput placeholder="Category" style={{ borderWidth: 1, borderColor: 'black', margin: 5 }}></TextInput>
            <TextInput placeholder="Date" style={{ borderWidth: 1, borderColor: 'black', margin: 5 }}></TextInput>
            <TextInput placeholder="Description" style={{ borderWidth: 1, borderColor: 'black', margin: 5 }}></TextInput>
            <Button title="Add" onPress={() => { console.log('Add button clicked') }}></Button>
        </View>
    );
}

export default AddEvent;
