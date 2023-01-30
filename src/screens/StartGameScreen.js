import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../components/Card";
import color from "../components/constants/color";
import Input from "../components/input";
import { FirstButton } from "../components/Button";

const StartGameScreen = ({onStartGame}) => {
  // State para el input
  const [value, setValue] = useState("");
  // State para Boton Confirmacion
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  // Funcion para boton del confirmation
  const handleConfirmation = () => {
    // Convertimos el valor en number ya que estaba como string
    const newValue = parseInt(value);
    // Creamos un If para validar informacion
    if (newValue === NaN || newValue <= 0 || newValue > 99) return;
    setConfirmed(true);
    setSelectedNumber(newValue);
    setValue("");
    Keyboard.dismiss()
  };
  const handleInput = (text) => {
    console.log(text);
    // Funcion para que los numeros admisibles en el iunput sean unicamnete en el rango del 0 al 9
    setValue(text.replace(/[^0-9]/g, ''));
  };
  const handleResetInput = () => {
    setValue("");
    setConfirmed(false);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1}} >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.countainer}>
          <Text style={styles.title}>Start Game</Text>
          {/* Primer card con 'input' para poner numero y botones */}
          <Card>
            <Text style={styles.subTitle}>Choose a Number</Text>
            <Input
              fontSize={25}
              blurOnSubmit
              autocapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              maxLength={2}
              value={value}
              onChangeText={handleInput}
            />
            <View style={styles.buttonCountainer}>
              <FirstButton title="Clean" onPress={handleResetInput} />
              <FirstButton
                newStyles={styles.confirmBottom}
                title="Confirm"
                onPress={handleConfirmation}
              />
            </View>
          </Card>
          {/* Confirmamos si esta el confirmed esta en true, avanzamos con el nuevo card */}
          {confirmed && (
            // Segundo card con 'text' para mostrar nuestra seleccion de numero
            <Card newStyles={styles.chosenCardText}>
              <Text style={styles.chosenText}>Your number is :</Text>
              <Text style={styles.numberText}>{selectedNumber}</Text>
              <FirstButton
                newStyles={styles.startButton}
                title={"Start"}
                onPress={()=>onStartGame(selectedNumber)}
              />
            </Card>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  countainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: color.primary,
  },
  title: {
    fontSize: 20,
    marginBottom: 25,
    color: "white",
  },
  subTitle: {
    color: "white",
    fontSize: 15,
  },
  buttonCountainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  confirmBottom: {
    backgroundColor: color.actionColor,
  },
  startButton: {
    backgroundColor: color.actionColor,
  },
  chosenText: {
    color: "white",
  },
  chosenCardText: {
    marginTop: 30,
    width: "50%",
  },
  numberText: {
    marginTop: 10,
    fontSize: 35,
  },
});
