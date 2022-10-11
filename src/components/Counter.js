import React from 'react'
import {Text,View,StyleSheet,Button} from 'react-native'

const Counter = ({increaseOrDecrease}) => {
  return (
    <View>
        <Button title={'button'} onPress={()=>increaseOrDecrease()}/>
    </View>
  )
}

const styles=StyleSheet.create({});

export default Counter