import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Goal = ({ goal, ...attributes }) => (
  <View
    {...attributes}
    style={{ ...styles.goal, ...attributes.style }}
  >
    <Text>{goal.value}</Text>
  </View>
)

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  }
})
