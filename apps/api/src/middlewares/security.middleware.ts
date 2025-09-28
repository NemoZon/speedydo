import cors from 'cors';
import helmet from 'helmet';
import { Express } from 'express';
import { API_URL } from '../consts/settings';

export function enableSecurity(app: Express) {
  // ✅ Настройки Helmet
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' }, // чтобы swagger/openapi могли подгружать схемы
    }),
  );

  // ✅ Настройки CORS
  app.use(
    cors({
      origin: [API_URL],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    }),
  );
}
