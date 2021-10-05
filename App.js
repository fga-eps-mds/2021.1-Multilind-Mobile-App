import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { BottomNavigation } from './src/navigation';
import {
  LocationContextProvider,
  LanguageContextProvider,
  TrunkContextProvider,
} from './src/contexts';
import { useCustomFonts } from './src/helpers';

export default function App() {
  const fontLoaded = useCustomFonts();

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <TrunkContextProvider>
      <LanguageContextProvider>
        <LocationContextProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <BottomNavigation />
            </NavigationContainer>
          </SafeAreaProvider>
        </LocationContextProvider>
      </LanguageContextProvider>
    </TrunkContextProvider>
  );
}
