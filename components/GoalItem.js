import { StyleSheet, View, Text, Pressable } from "react-native";


function GoalItem(props) {
    return (
        <Pressable
            onPress={props.ondeleteItem.bind(this, props.id)}
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            <View style={styles.goalItem}>
                <Text android_ripple={{ color: '#c5c7cd' }} style={styles.goalItemText}>{props.text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#092376',
        borderRadius: 7,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 8
    },
    goalItemText: {
        color: 'white',
        padding: 8
    },
    pressedItem: {
        opacity: 0.5
    }
});

export default GoalItem;