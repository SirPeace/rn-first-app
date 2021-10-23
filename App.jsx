import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AddGoalModal } from './components/AddGoalModal';
import { Goal } from './components/Goal';

export default function App() {
  const [goals, setGoals] = useState([])
  const [isAddGoalModalOpened, setIsAddGoalModalOpened] = useState(false)

  const deleteGoal = goalId => {
    const filteredGoals = goals.filter(goal =>
      goal.id !== goalId
    )

    setGoals(filteredGoals)
  }

  return (
    <View style={styles.container}>
      <Button
        title="Add a goal"
        onPress={setIsAddGoalModalOpened.bind(this, true)}
      />

      <AddGoalModal
        visible={isAddGoalModalOpened}
        addGoal={newGoal => setGoals(goals => [...goals, newGoal])}
        closeModal={setIsAddGoalModalOpened.bind(this, false)}
      />

      {goals.length > 0 ? (
        <FlatList
          style={{ marginVertical: 15 }}
          data={goals}
          renderItem={dataItem =>
            <TouchableOpacity onPress={() => deleteGoal(dataItem.item.id)}>
              <Goal
                goal={dataItem.item}
                style={{ marginTop: dataItem.index === 0 ? 0 : 10 }}
              />
            </TouchableOpacity>
          }
        />
      ) : (
        <Text style={{ color: 'gray', marginTop: 10, textAlign: 'center' }}>
          No active goals
        </Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 75,
  }
});
