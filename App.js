import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen'




export default function App() {
  const [loaded] = useFonts({
    RobotoCodensedItalic: require('./src/assets/fonts/RobotoCondensed-Italic.ttf')
  })

  const [userNumber, setUserNumber] = useState()

  const handleStarGame = (selectedNumber) => {
    setUserNumber (selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handleStarGame}/>

  if(userNumber){
    content = <GameScreen/>
  }
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={'Guess The Number'}/>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
