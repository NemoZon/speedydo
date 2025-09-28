import { Router } from 'express';

import { SwaggerBuilder } from '../documentation/swagger';
import { apiKey } from '../middlewares/apikey.middleware';
import { ApiTestController } from '../controllers/apitest.controller';

export const ApiTestRouter = Router();

SwaggerBuilder.addRoute('/apitest', '/', 'get', {
  summary: 'Тестовый эндпоинт',
  responses: {
    200: { description: 'Успешный ответ' },
  },
});
ApiTestRouter.get('/', ApiTestController.log);

SwaggerBuilder.addRoute('/apitest', '/apikey', 'get', {
  summary: 'Тестовый apikey эндпоинт',
  responses: {
    200: { description: 'Успешный ответ' },
    401: { description: 'Api Key обязателен' },
  },
});
ApiTestRouter.get('/apikey', apiKey, ApiTestController.log);

SwaggerBuilder.addRoute('/apitest', '/models', 'get', {
  summary: 'Тестовый эндпоинт для моделей из mongoose',
  responses: {
    200: { description: 'Успешный ответ' },
  },
});
ApiTestRouter.get('/models', apiKey, ApiTestController.checkModels);
