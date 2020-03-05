// @ts-check
import Axios from 'axios';

const HttpClient = () => Axios.create({
    baseURL: `/api`,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default HttpClient;
