import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { MapScreen, SettingsScreen } from '../screens';
import { PRIMARY_BLUE, DARK } from '../constants';
import { LanguageNavigation } from './LanguageNavigation';

const Tab = createBottomTabNavigator();
export const BOTTOM_TAB_HEIGHT = 75;

export function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PRIMARY_BLUE,
        tabBarLabelStyle: { fontSize: 16 },
        tabBarStyle: { height: BOTTOM_TAB_HEIGHT, alignItems: 'center' },
        tabBarItemStyle: { padding: 10 },
        tabBarInactiveTintColor: DARK,
      }}
    >
      <Tab.Screen
        name="Map"
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map-marked" size={30} color={color} />
          ),
        }}
        component={MapScreen}
      />
      <Tab.Screen
        name="LanguageNavigator"
        options={{
          tabBarLabel: 'Linguas',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="language" size={35} color={color} />
          ),
        }}
        component={LanguageNavigation}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={30} color={color} />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
