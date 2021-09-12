import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation } from './src/navigation';
import { LocationContextProvider } from './src/contexts';

export default function App() {
  return (
    <LocationContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </LocationContextProvider>
  );
}
