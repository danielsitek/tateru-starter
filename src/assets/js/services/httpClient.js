// @ts-check
import Axios from 'axios';

export const HttpClient = () => Axios.create({
  baseURL: `/api`,
  headers: {
    'Content-Type': 'application/json',
  }
});
