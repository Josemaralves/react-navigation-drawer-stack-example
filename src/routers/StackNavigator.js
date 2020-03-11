import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Hello from '../pages/Hello'

export default function Stack(){
    const Stack  = createStackNavigator()
      return(
        <Stack.Navigator initialRouteName="Hello">
          <Stack.Screen name="Hello" component={Hello}/>
        </Stack.Navigator>
      )
  }