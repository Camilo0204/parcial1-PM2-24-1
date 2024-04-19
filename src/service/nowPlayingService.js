import axios from 'axios';

const API_KEY = '492d218f089fd8c20e9c3a945b482a9f';
const API_URL = 'https://api.themoviedb.org/3';

const nowPlayingService = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    language: 'es-CO',
  },
});

export const getNowPlayingMovies = async (page = 1) => {
  try {
    const response = await nowPlayingService.get('/movie/now_playing', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener las películas en cartelera desde la API');
  }
};

export default nowPlayingService;