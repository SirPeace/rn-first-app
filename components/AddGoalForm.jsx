import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const AddGoalForm = ({ addGoal }) => {
  const [form, setForm] = useState({ goal: '' })

  const submitHandler = () => {
    const newGoal = {
      id: uuidv4(),
      value: form.goal,
      createdAt: new Date().toLocaleString()
    }

    addGoal(newGoal)

    setForm({ goal: '' })
  }

  return (
    <View style={styles.addGoalForm}>
      <TextInput
        style={styles.addGoalInput}
        value={ form.goal }
        placeholder="New goal"
        onChangeText={text => setForm({ goal: text })}
      />
      <Button title="ADD" onPress={submitHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  addGoalForm: {
    display: 'flex',
    flexDirection: 'row',
  },

  addGoalInput: {
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flexGrow: 1,
    marginRight: 10,
  }
})
