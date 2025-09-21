import axios from 'axios';

const host = 'http://localhost:5240/api'

const apiClient = axios.create({
    baseURL: host,
})

export default apiClient;