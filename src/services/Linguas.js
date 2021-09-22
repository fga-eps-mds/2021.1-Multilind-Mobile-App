import api from './Api';
import teste from './teste';

export default async () => {
  let response = {};
  try {
    response = await api.get('/lingua');
    // console.log(response.data);
    teste(response.data);
  } catch (error) {
    console.log(error);
  }

  return response?.data ? response?.data : null;
};
