import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

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

      <ScrollView style={{ marginVertical: 15 }}>
        {goals.length !== 0
          ? goals.map((goal, index) =>
            <Goal
              key={goal.id}
              goal={goal}
              onTouchEnd={() => deleteGoal(goal.id)}
              style={{ marginTop: index === 0 ? 0 : 10 }}
            />
          )
          : (
            <Text style={{ color: 'gray', marginTop: 10, textAlign: 'center' }}>
              No active goals
            </Text>
          )
        }
      </ScrollView>

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
