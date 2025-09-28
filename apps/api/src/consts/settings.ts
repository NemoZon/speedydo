export const HOST = process.env.HOST ?? 'localhost';
export const PORT = process.env.API_PORT ? Number(process.env.API_PORT) : 3000;
export const MODE = process.env.MODE ? process.env.MODE : 'dev';
export const BASE_URL = `http${MODE === 'prod' ? 's' : ''}://${HOST}:${PORT}`;
export const SWAGGER_URL = `${BASE_URL}/docs`;
export const API_URL = `${BASE_URL}/api`;
export const API_KEY = process.env.API_KEY ?? '123';
