import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-17.herokuapp.com',
});

export default api;