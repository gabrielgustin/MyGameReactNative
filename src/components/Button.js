import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import color from './constants/color';

export function FirstButton({newStyles,title, onPress}) {
  
    return (
      <TouchableOpacity style={{...styles.button, ...newStyles}} onPress={onPress}>

        <Text style={styles.text}>{title}</Text>

      </TouchableOpacity>
    );
  }

  
  const styles = StyleSheet.create({
    button: {
    width: 80,
    backgroundColor: color.disableColor,
    margin: 15,
    borderRadius: 12,
    alignSelf: "center",
    paddingVertical: 10,
  },
  text:{
    color: "white",
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15
  }
})