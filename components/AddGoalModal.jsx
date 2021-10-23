import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const AddGoalModal = ({ addGoal, visible, closeModal }) => {
  const [form, setForm] = useState({ goal: '' })

  const submitHandler = () => {
    const newGoal = {
      id: uuidv4(),
      value: form.goal,
      createdAt: new Date().toLocaleString()
    }

    addGoal(newGoal)
    setForm({ goal: '' })
    closeModal()
  }

  return (
    // statusBarTranslucent fixes an issue of modal not being full height on Android
    <Modal visible={visible} animationType="slide" statusBarTranslucent={true}>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <View style={styles.addGoalForm}>
          <TextInput
            style={styles.addGoalInput}
            value={form.goal}
            placeholder="New goal"
            onChangeText={text => setForm({ goal: text })}
          />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Button
                title="Close"
                color="gray"
                onPress={closeModal}
              />
            </View>
            <View style={{ flex: 1 }}>
             <Button title="Add" onPress={submitHandler} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  addGoalForm: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    minWidth: '75%',
  },

  addGoalInput: {
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
  }
})
