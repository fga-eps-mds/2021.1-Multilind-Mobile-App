import React, { createContext, useState, useEffect, useContext } from 'react';
import { FamilyService } from '../services';

const FamilyContext = createContext();

export function FamilyContextProvider({ children }) {
  const [families, setFamilies] = useState([]);

  async function getAllFamilies() {
    const response = await FamilyService.getAllFamilies();
    setFamilies(response);
  }

  useEffect(() => {
    getAllFamilies();
  }, []);

  return (
    <FamilyContext.Provider value={{ families }}>
      {children}
    </FamilyContext.Provider>
  );
}

export const useFamily = () => useContext(FamilyContext);
