import { ScrollView, View, Pressable, Text } from "react-native";

import styles from "./style";


const AddEvent = () => {
    return (
        <View style={styles.addEventContainer}>

            {/* <View style={styles.calendarContainer}>
                <Pressable onPress={() => setCalendarOpen(true)}>
                    <Text style={styles.calendarButtonTxt}>{date.toString().slice(4, 15)}</Text>
                </Pressable>
            </View>
            <DatePicker
                modal
                open={calendarOpen}
                date={date}
                onConfirm={(date) => {
                    setCalendarOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setCalendarOpen(false)
                }}
                mode="date" />

            <View style={styles.eventDescriptionInputContainer}>
                <TextInput style={styles.eventDescriptionInput} placeholder="Description" value={description} onChangeText={setDescription} />
            </View>

            <SelectDropdown
                data={categories}
                onSelect={(selectedItem, index) => {
                    setCategory(selectedItem)
                }}
                renderButton={(selectedItem) => {
                    return (
                        <View style={styles.dropdownButtonStyle}>
                            <Text style={styles.dropdownButtonTxtStyle}>
                                {(selectedItem && selectedItem) || 'Category'}
                            </Text>
                        </View>
                    );
                }}
                renderItem={(item, index, isSelected) => {
                    return (
                        <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                            <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                        </View>
                    );
                }}
            />

            <View style={styles.addEventButton}>
                <Pressable onPress={() => handleAddEvent({
                    id: Date.now(),
                    date: date,
                    description: description,
                    category: category
                })}>
                    <Text style={styles.addEventButtonTxt}>Add Event</Text>
                </Pressable>
            </View> */}

        </View>
    );
};

export default AddEvent;
