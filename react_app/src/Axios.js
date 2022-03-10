import axios from 'axios';

const instance = axios.create({
    // tmdb api url
    baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
