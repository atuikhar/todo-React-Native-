import React, { Dispatch, SetStateAction, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Modal,
} from "react-native";

interface TodoItem {
  name: string;
  key: string;
}

interface Todo {
  todos: Dispatch<SetStateAction<TodoItem[]>>;
  show: Dispatch<SetStateAction<boolean>>;
}

const SearchBox = ({ todos, show }: Todo) => {
  const [todo, setTodo] = useState("");
  const handleTodo = (t: any) => {
    setTodo(t);
  };
  const handleAddTodo = () => {
    if (todo) {
      todos((prevTodos) => [
        ...prevTodos,
        { name: todo, key: Math.random().toString() },
      ]);
      setTodo("");
    } else {
      Alert.alert("INVALID", "Input field cannot be empty", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleTodo}
        style={styles.input}
        placeholder="Enter Todo..."
        value={todo}
      />
      <View style={styles.wrapper}>
        <View style={styles.button}>
          <Button onPress={handleAddTodo} title="Add Todo" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => show(false)} title="Cancel" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    paddingTop: 250,
    paddingBottom: 30,
  },
  input: {
    borderRadius: 2,
    borderWidth: 2,
    padding: 10,
    margin: 10,
    textAlign: "center",
  },
  wrapper: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "30%",
  },
});

export default SearchBox;
