// api.js

import axios from 'axios';

const baseURL = 'http://localhost:8000'; // API'nin gerçek adresini kullanın

export const fetchData = async () => {
  try {
    const response = await axios.get(`${baseURL}/flights`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
