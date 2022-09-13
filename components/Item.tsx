import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

interface Todo {
  name: string;
  id: string;
  deleteTodo: (id: string) => void;
}

const Item = ({ name, id, deleteTodo }: Todo) => {
  return (
    <Pressable
      onPress={deleteTodo.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "rgb(33, 150, 243)",
    borderRadius: 5,
    color: "white",
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default Item;
