import React from 'react';
import { MapScreen } from '_screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from '_screens';

export default function App() {
  return (<SafeAreaProvider>
          <MapScreen />
          </SafeAreaProvider>);
}
