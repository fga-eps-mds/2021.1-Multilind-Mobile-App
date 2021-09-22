import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { BottomNavigation } from './src/navigation';
import { LocationContextProvider } from './src/contexts';
import { useCustomFonts } from './src/helpers';
import Linguas from './src/services/Linguas';
// import teste from './src/services/teste';

export default function App() {
  const fontLoaded = useCustomFonts();

  if (!fontLoaded) {
    return <AppLoading />;
  }

  Linguas();
  // teste();
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
