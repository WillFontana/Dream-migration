import axios from 'axios';

const api = axios.create({ baseURL: 'https://admin.kozinhar.com/gera-json.php' });

export default api;