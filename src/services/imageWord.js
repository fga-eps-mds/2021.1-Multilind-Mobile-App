import api from './apiImage';

const url = '/api/files';

export class ImageWordService {
  static async getImageWords(idWord) {
    try {
      const response = await api.get(`${url}/${idWord}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
