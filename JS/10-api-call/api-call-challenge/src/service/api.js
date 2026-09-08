import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de Requisição para log e observabilidade
api.interceptors.request.use(
  (config) => {
    console.log(`[API REQ] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de Resposta para tratamento unificado de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Falha na comunicação com o servidor';
    console.error(`[API ERROR] ${message}`);
    return Promise.reject(new Error(message));
  }
);
