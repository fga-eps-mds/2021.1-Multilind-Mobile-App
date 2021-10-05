import api from './api';

const url = '/palavra';

export class WordService {
  static async getAllWords(idLingua) {
    try {
      const response = await api.get(`${url}/all/${idLingua}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }

  static async getWordById(idLingua, idPalavra) {
    try {
      const response = await api.get(`${idLingua}/${idPalavra}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
