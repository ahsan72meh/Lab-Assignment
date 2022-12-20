import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({route,navigation}) => {
  return (
    <View>
      <Text>{route.params.obj2}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})