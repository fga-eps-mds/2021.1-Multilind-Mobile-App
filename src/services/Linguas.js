import api from './Api';

export default async () => {
  try {
    const response = await api.get('/lingua');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
