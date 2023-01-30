import { StyleSheet, TextInput } from "react-native";
import React from "react";

// restProp son los style que trae por defecto el texteInput de React Native
const Input = ({ newStyle, ...restProp }) => {
  return <TextInput styles={{ ...styles.input, ...newStyle }} {...restProp} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginVertical: 10,
    width: 50,
  },
});
