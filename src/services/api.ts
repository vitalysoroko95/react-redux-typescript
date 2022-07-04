import axios from 'axios';

export const API_KEY = '8abb409f425448bfb04e6047a51ae70d';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
});

export default axiosInstance;
