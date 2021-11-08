import React, { createContext, useEffect, useState, useContext } from 'react';

import {
  requestForegroundPermissionsAsync,
  getLastKnownPositionAsync,
} from 'expo-location';

const LocationContext = createContext();
const BRASIL_REGION_INFO = {
  latitude: -12.1344643,
  longitude: -54.0795284,
  latitudeDelta: 30,
  longitudeDelta: 30,
};

export function LocationContextProvider({ children }) {
  const [location, setLocation] = useState({
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });

  useEffect(() => {
    async function getPosition() {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      const currentLocation = await getLastKnownPositionAsync({});
      if (currentLocation?.coords) {
        setLocation((state) => ({ ...state, ...currentLocation.coords }));
      } else {
        setLocation(BRASIL_REGION_INFO);
      }
    }
    getPosition();
  }, []);

  return (
    <LocationContext.Provider
      value={{ location: BRASIL_REGION_INFO, hasLocation: true }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => useContext(LocationContext);
