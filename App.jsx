import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { AddGoalForm } from './components/AddGoalForm';
import { Goal } from './components/Goal';

export default function App() {
  const [goals, setGoals] = useState([])

  const deleteGoal = goalId => {
    const filteredGoals = goals.filter(goal =>
      goal.id !== goalId
    )

    setGoals(filteredGoals)
  }

  return (
    <View style={styles.container}>
      <AddGoalForm
        addGoal={newGoal => setGoals(goals => [...goals, newGoal])}
      />

      {goals.length > 0 ? (
        <FlatList
          style={{ marginVertical: 15 }}
          data={goals}
          renderItem={dataItem =>
            <Goal
              goal={dataItem.item}
              onTouchEnd={() => deleteGoal(dataItem.item.id)}
              style={{ marginTop: dataItem.index === 0 ? 0 : 10 }}
            />
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
    paddingTop: 60,
  }
});
