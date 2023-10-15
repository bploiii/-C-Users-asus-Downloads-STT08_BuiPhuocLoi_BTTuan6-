import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Home from "./Form/Home";
import Change_Color from "./Form/Change_Color"
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={ {headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name="Change_Color" component={Change_Color}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}