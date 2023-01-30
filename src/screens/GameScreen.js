import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { FirstButton } from "../components/Button";
import color from "../components/constants/color";
import Card from "../components/Card";

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1));
  }, []);

  return (
    <View style={styles.countainer}>
      <Text>The Opponent's Assumption Is:</Text>
      <Text>{currentGuess}</Text>
      <Card newStyles={styles.buttonCountainer}>
        <FirstButton title={"Lower"} onPress={() => console.log("Menor")} />
        <FirstButton title={"Higher"} onPress={() => console.log("Mayor")} />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  countainer: {
    flex: 1,
    padding: 10,
    alingItems: "center",
    backgroundColor: color.primary,
  },
  buttonCountainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80",
  },
});
