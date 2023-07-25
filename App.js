import { useState } from "react"
import { Image, Keyboard, ScrollView } from "react-native"
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import Task from "./components/Task"

export default function App() {
  const [task, setTask] = useState()
  const [taskItem, setTaskItem] = useState([])
  const handleAddTask = () => {
    Keyboard.dismiss()
    if (task) {
      setTaskItem([...taskItem, task])
      setTask(null)
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItem]
    itemsCopy.splice(index, 1)
    setTaskItem(itemsCopy)
  }

  const deleteAll = () => {
    let itemsCopy = []
    setTaskItem(itemsCopy)
  }
  return (
    <View style={styles.container}>
      <ScrollView style={{ flexGrow: 1 }}>
        <Text
          style={{
            backgroundColor: "#453b3b",
            marginTop: 25,
            color: "white",
            textAlign: "center",
            fontSize: 20,
            padding: 10,
            fontWeight: "700",
          }}
        >
          {" "}
          My Todo App
        </Text>
        <TouchableOpacity style={styles.removeall} onPress={() => deleteAll()}>
          <Text style={styles.removealltext}>Remove All</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.items}>
            {taskItem.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.todocard}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}
                  >
                    <Image
                      source={require("./Image/delete.png")}
                      style={{
                        width: 25,
                        height: 25,
                        marginRight: 20,
                        marginLeft: 3,
                      }}
                    />
                  </TouchableOpacity>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.inputBox}
          value={task}
          placeholder="Enter your task"
          onChangeText={(text) => {
            setTask(text)
          }}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <Image
            source={require("./Image/plus.png")}
            style={{
              width: 25,
              height: 25,
              marginRight: 10,
              tintColor: "white",
            }}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  writeTaskWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "grey",
    borderWidth: 2,
  },
  inputBox: {
    width: "80%",
    backgroundColor: "grey",

    height: 50,
  },
  removealltext: {
    fontSize: 17,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    width: 110,
    padding: 5,
    borderRadius: 5,
    marginRight: 15,
    backgroundColor: "red",
  },
  removeall: {
    flex: 0,
    justifyContent: "flex-end",
    width: "100%",
    flexDirection: "row",
    margin: 10,
  },
  todocard: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f0e9e9",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "white",
  },
})
