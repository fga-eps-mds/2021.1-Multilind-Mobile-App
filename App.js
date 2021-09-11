import React from 'react';
import { MapScreen } from '_screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <MapScreen />
    </SafeAreaProvider>
  );
}
