import api from './api';

const url = '/tronco';

export class TrunkService {
  static async getAllTrunks() {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }

  static async getTrunkByID(id) {
    try {
      const response = await api.get(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
