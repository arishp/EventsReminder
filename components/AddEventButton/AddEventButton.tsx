import { View, Pressable, Text } from 'react-native';

interface AddEventButtonProps {
    onPress: () => void;
}

const AddEventButton = (props: AddEventButtonProps) => {
    return (
        <View>
            <Pressable onPress={()=>{props.onPress()}}>
                <Text>Add Event Button</Text>
            </Pressable>
        </View>
    );
};

export default AddEventButton;