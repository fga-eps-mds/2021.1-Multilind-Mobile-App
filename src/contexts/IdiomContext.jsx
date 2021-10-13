import React, { createContext, useState, useEffect, useContext } from 'react';
import { IdiomService } from '../services';
import { normalizeSpokeResponse } from '../helpers';

const IdiomContext = createContext();

export function IdiomContextProvider({ children }) {
  const [idioms, setIdioms] = useState();
  async function getAllIdioms() {
    const response = await IdiomService.getAllIdioms();
    setIdioms(normalizeSpokeResponse(response));
  }

  useEffect(() => {
    getAllIdioms();
  }, []);

  return (
    <IdiomContext.Provider value={{ idioms }}>{children}</IdiomContext.Provider>
  );
}

export const useIdiom = () => useContext(IdiomContext);
