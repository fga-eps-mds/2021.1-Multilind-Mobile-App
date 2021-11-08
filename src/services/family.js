import api from './api';

const url = '/tronco';

export class FamilyService {
  static async getAllFamilies() {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }

  static async getFamilyByID(id) {
    try {
      const response = await api.get(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
