import apiContent from './api';

const url = '/falada';

export class SpokeService {
  static async getAllSpokeLanguages() {
    try {
      const response = await apiContent.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
