import api from './api';

const url = '/palavra';

export class PalavraService {
  static async getAllWords(id_lingua) {
    try {
      const response = await api.get(`${url}/${id_lingua}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
