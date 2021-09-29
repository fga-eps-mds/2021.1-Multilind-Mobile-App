import React, { createContext, useState, useEffect, useContext } from 'react';
import { WordService } from '../services/words';

const WordContext = createContext();

export function WordContextProvider({ children }) {
  const [words, setWords] = useState([]);

  async function getAllWords(idLingua) {
    const response = await WordService.getAllWords(idLingua);
    setWords(response);
  }

  useEffect(() => {
    getAllWords();
  }, []);

  return (
    <WordService.Provider value={{ words }}>{children}</WordService.Provider>
  );
}

export const useWord = () => useContext(WordContext);
