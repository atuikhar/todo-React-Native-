import React, { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

interface TodoItem {
  name: string;
  key: string;
}

interface Todo {
  todos: Dispatch<SetStateAction<TodoItem[]>>;
}

const SearchBox = ({ todos }: Todo) => {
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
      <Button onPress={handleAddTodo} title="Add Todo" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  input: {
    borderRadius: 2,
    width: "80%",
    borderWidth: 2,
    padding: 3,
    marginRight: 6,
    textAlign: "center",
  },
});

export default SearchBox;
