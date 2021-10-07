import React, { createContext, useState, useEffect, useContext } from 'react';
import { SpokeService } from '../services/spokeService';
import { normalizeSpokeResponse } from '../helpers';

const SpokeContext = createContext();

export function SpokeContextProvider({ children }) {
  const [spokeLanguages, setSpokeLanguages] = useState();
  async function getAllSpokeLanguages() {
    const response = await SpokeService.getAllSpokeLanguages();
    setSpokeLanguages(normalizeSpokeResponse(response));
  }

  useEffect(() => {
    getAllSpokeLanguages();
  }, []);

  return (
    <SpokeContext.Provider value={{ spokeLanguages }}>
      {children}
    </SpokeContext.Provider>
  );
}

export const useSpoke = () => useContext(SpokeContext);
