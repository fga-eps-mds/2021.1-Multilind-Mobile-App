// eslint-disable-next-line import/no-unresolved
// import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import api from './api';

const url = '/lingua';

export class LanguageService {
  static async getAllLanguages() {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }

  static async getLanguageByID(id) {
    try {
      const response = await api.get(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
