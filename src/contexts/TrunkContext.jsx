import React, { createContext, useState, useEffect, useContext } from 'react';
import { TrunkService } from '../services';

const TrunkContext = createContext();

export function TrunkContextProvider({ children }) {
  const [trunks, setTrunks] = useState([]);

  async function getAllTrunks() {
    const response = await TrunkService.getAllTrunks();
    setTrunks(response);
  }

  useEffect(() => {
    getAllTrunks();
  }, []);

  return (
    <TrunkContext.Provider value={{ trunks }}>{children}</TrunkContext.Provider>
  );
}

export const useTrunk = () => useContext(TrunkContext);
