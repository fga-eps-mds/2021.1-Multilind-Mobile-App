import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
