import api from './api';

export class LanguageService {
  constructor() {
    this.url = '/lingua';
  }

  static async getAllLanguages() {
    try {
      const response = await api.get(this.url);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
