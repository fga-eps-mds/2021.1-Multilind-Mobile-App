import apiContent from './api';

const url = '/lingua';

export class LanguageService {
  static async getAllLanguages() {
    try {
      const response = await apiContent.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }

  static async getLanguageByID(id) {
    try {
      const response = await apiContent.get(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
