import apiContent from './api';

const url = '/idioma';

export class IdiomService {
  static async getAllIdioms() {
    try {
      const response = await apiContent.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
