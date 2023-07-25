import { View, Text } from "react-native"
import React from "react"
import { StyleSheet } from "react-native"

const Task = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.text}</Text>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  item: {
    padding: 15,
  },
  itemText: {
    color: "orange",
    fontSize: 18,
  },
})
