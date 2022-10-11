import React from 'react'
import { Text,SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import CounterScreen from './screen/CounterScreen';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Counter' component={CounterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
