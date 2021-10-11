// eslint-disable-next-line import/no-unresolved
// import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import api from './api';

const url = '/dialeto';

export class DialetoService {
  static async getAllDialetos(query) {
    try {
      const { idLingua, idEtnia } = query;
      const response = await api.get(url, {
        params: { id_lingua: idLingua, id_etnia: idEtnia },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return { error: true, message: error?.response?.data };
    }
  }
}
