import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  let initialDB = [
    {
      text: 'Santiago de Compostella trip 🇵🇱 🙂 😀 🍀  🥰 🇵🇹 🇪🇸',
      id: Math.random().toFixed(6).toString()
    },
    {
      text: 'Create and develop "Leadership Fundamentals" course 🙂 😀 🍀 ❤️',
      id: Math.random().toFixed(6).toString()
    },
    {
      text: 'Create and develop "Leadership Advanced" course 🙂 😀 🍀 ❤️ 🏆',
      id: Math.random().toFixed(6).toString()
    },
    {
      text: 'London trip ❤️🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇬🇧',
      id: Math.random().toFixed(6).toString()
    },
    {
      text: 'Motocycle trip across the US ❤️ ❤️ ❤️ ❤️ 🇺🇸',
      id: Math.random().toFixed(6).toString()
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState(initialDB);

  function addGoalHandler(goalEnteredText) {
    setGoals(currentGoals =>
      [
        ...currentGoals,
        { text: goalEnteredText, id: Math.random().toFixed(6).toString() }
      ]
    );
    setShowModal(false);
  };

  function deleteItem(id) {
    console.log('Delete item: ', id);
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  function showModalHandler() {
    setShowModal(true);
  };

  function cancelModalHandler() {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}> MY BUCKET LIST</Text> */}
      <View style={styles.imageContainer}>
        <Image source={require('./assets/image/my_dreams.png')} />
      </View>
      <View style={styles.buttonAddDream}>
        <Button title='Add new dream' color="#092376" onPress={showModalHandler} />
      </View>

      {/* {showModal && <GoalInput onAddGoal={addGoalHandler} />} // to jeden ze sposobów ale jest lepszy w RN*/}
      <GoalInput
        visible={showModal}
        onAddGoal={addGoalHandler}
        onCancel={cancelModalHandler}
      />
      <View style={styles.goalsContainer}>
        <Text style={styles.header2Text}>My dream list: </Text>
        <FlatList
          data={goals}
          renderItem={(itemObject) => {
            return (
              < GoalItem
                text={itemObject.item.text}
                id={itemObject.item.id}
                ondeleteItem={deleteItem}
              />
            )
          }}
          keyExtractor={(item) => { return item.id; }}
          alwaysBounceVertical={false}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 10,
    color: '#092376'
  },
  goalsContainer: {
    flex: 8,
    paddingTop: 16
  },
  headerText: {
    fontSize: 22,
    fontWeight: 800
  },
  header2Text: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 20,
    color: '#ED1C24'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAddDream: {
    padding: 16,
    marginBottom: 30,
    backgroundColor: '#092376',
    borderRadius: 7
  }
});
