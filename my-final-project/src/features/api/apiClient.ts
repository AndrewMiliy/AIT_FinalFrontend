import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const apiClient = {
  get: (path: string) => axios.get(`${API_BASE_URL}${path}`),
  post: (path: string, data: object) => axios.post(`${API_BASE_URL}${path}`, data),
  delete: (path: string) => axios.delete(`${API_BASE_URL}${path}`),
  // Добавьте другие методы по мере необходимости
};
