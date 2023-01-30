import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "./constants/color";

const Card = ({ newStyles, children }) => {
  return <View style={{ ...styles.countainer, ...newStyles }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  countainer: {
    width: 300,
    maxWidth: "80%",
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: color.secondary,
  },
});
