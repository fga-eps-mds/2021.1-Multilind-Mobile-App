import api from './api';

export default class LanguageService {
  constructor() {
    this.url = '/lingua';
  }

  static async getAllLanguages() {
    try {
      const response = await api.get(this.url);
      return response.data;
    } catch (error) {
      console.log(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
