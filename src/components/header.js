import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from './constants/color'

const Header = ({title}) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Header: {
        backgroundColor: color.primary,
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    HeaderTitle:{
        color: 'white',
        fontSize: 25,

    }
})