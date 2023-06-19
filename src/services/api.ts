import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string
});

export default instance