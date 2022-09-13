import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  ListRenderItemInfo,
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
  const onDelete = (id: string) => {
    setTodos(todos.filter((todo: TodoItem) => todo.key !== id));
  };

  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <View style={styles.container}>
        <Header title="TodoList" />
        <SearchBox todos={setTodos} />
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
});
