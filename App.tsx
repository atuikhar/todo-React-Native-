import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  ListRenderItemInfo,
  Modal,
  Button,
} from "react-native";

import { Header } from "./components/Header";
import Item from "./components/Item";
import SearchBox from "./components/SearchBox";

interface TodoItem {
  name: string;
  key: string;
}

export default function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const onDelete = (id: string) => {
    setTodos(todos.filter((todo: TodoItem) => todo.key !== id));
  };

  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar animated={true} backgroundColor="rgb(33, 150, 243)" />
      <View style={styles.container}>
        <Header title="TodoList" />
        <Modal visible={showModal} animationType="slide">
          <SearchBox show={setShowModal} todos={setTodos} />
        </Modal>
        <View style={styles.wrapper2}>
          <Button onPress={() => setShowModal(true)} title="Add Todo" />
        </View>
        <FlatList
          alwaysBounceVertical={false}
          data={todos}
          renderItem={({ item }: ListRenderItemInfo<TodoItem>) => (
            <Item id={item.key} deleteTodo={onDelete} name={item.name} />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    padding: 20,
    flex: 1,
    backgroundColor: "purple",
  },
  container: {
    padding: 20,
  },
  text: {
    backgroundColor: "rgb(33, 150, 243)",
    borderRadius: 5,
    color: "white",
    padding: 10,
    margin: 5,
    fontSize: 20,
  },

  wrapper2: {
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
});
