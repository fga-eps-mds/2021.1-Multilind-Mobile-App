import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LanguageScreen,
  LanguageInitialScreen,
  WordsScreen,
  SpecificWordScreen,
  LanguagePerTrunk,
  ImageWordScreen,
  InformationScreen,
} from '../screens';

const Stack = createStackNavigator();

export function LanguageNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="LanguageInitial" component={LanguageInitialScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Words" component={WordsScreen} />
      <Stack.Screen name="SpecificWord" component={SpecificWordScreen} />
      <Stack.Screen name="LanguagePerTrunk" component={LanguagePerTrunk} />
      <Stack.Screen name="ImageWordScreen" component={ImageWordScreen} />
    </Stack.Navigator>
  );
}
