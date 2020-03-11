import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNavigator from './src/routers/StackNavigator'

export default function App() {
  const Drawer  = createDrawerNavigator()
  return (
    <NavigationContainer>
       <Drawer.Navigator>
         <Drawer.Screen name="Home" component={StackNavigator}/>
       </Drawer.Navigator>
    </NavigationContainer>
  )
}