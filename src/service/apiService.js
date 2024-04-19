import axios from 'axios';

const API_KEY = '492d218f089fd8c20e9c3a945b482a9f';
const API_URL = 'https://api.themoviedb.org/3';

const apiService = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    language: 'es-CO',
  },
});

export const getUpcomingMovies = async (page = 1) => {
  try {
    const response = await apiService.get('/movie/upcoming', {
      params: { page } ,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener las películas próximas desde la API');
  }
};

export default apiService;
