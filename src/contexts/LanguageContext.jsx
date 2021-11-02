import React, { createContext, useState, useEffect, useContext } from 'react';
import { LanguageService } from '../services';

const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  const [languages, setLanguages] = useState([]);
  const [loadingLanguages, setLoadingLanguages] = useState(true);

  async function getAllLanguages() {
    const response = await LanguageService.getAllLanguages();
    setLoadingLanguages(false);
    setLanguages(response);
  }

  useEffect(() => {
    getAllLanguages();
  }, []);

  return (
    <LanguageContext.Provider value={{ languages, loadingLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
