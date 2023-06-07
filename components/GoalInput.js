import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
    const [goalEnteredText, setGoalEnteredText] = useState('');

    function goalInputHandler(enteredText) {
        setGoalEnteredText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(goalEnteredText);
        setGoalEnteredText('');
    };

    function cancelHandler() {
        console.log('cancel dream add');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/image/my_dreams.png')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder='add your life goals or dreams'
                    onChangeText={goalInputHandler}
                    value={goalEnteredText}
                />
                <View style={styles.modalButtonsContainer}>
                    <View style={styles.modalButton}>
                        <Button title='Add goal' onPress={addGoalHandler} color='#092376' />
                    </View>
                    <View style={styles.modalButton}>
                        <Button title='Cancel' onPress={props.onCancel} color='#ED1C24' />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#092376',
        padding: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 7,
        color: '#092376',
        width: '100%',
        padding: 16
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    modalButton: {
        width: 120,
        marginHorizontal: 15
    },
    image: {
        width: '100%',
        marginBottom: 16,
        marginTop: -200
    }
});

export default GoalInput;