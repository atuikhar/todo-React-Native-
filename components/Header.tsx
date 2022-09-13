import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return <Text style={styles.header}>{title}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(33, 150, 243)",
    marginBottom: 20,
  },
});
