import React, { createContext, useState, useEffect, useContext } from 'react';
import { LanguageService } from '../services';

const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const [languages, setLanguages] = useState([]);

  async function getAllLanguages() {
    const response = await LanguageService.getAllLanguages();
    setLanguages(response);
  }

  async function getLanguageByID(id) {
    const response = await LanguageService.getLanguageByID(id);
    setLanguages(response);
  }

  useEffect(() => {
    getAllLanguages();
    getLanguageByID();
  }, []);

  return (
    <LanguageContext.Provider value={{ languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
