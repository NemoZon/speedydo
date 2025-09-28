import { API_URL } from '../consts/settings';

type Method = 'get' | 'post' | 'put' | 'delete';

interface RouteConfig {
  summary: string;
  responses?: Record<number, { description: string }>;
}

export class SwaggerBuilder {
  private static paths: Record<string, Partial<Record<Method, RouteConfig>>> = {};

  static addRoute(prefix: string, path: string, method: Method, config: RouteConfig) {
    const fullPath = prefix + path;
    if (!this.paths[fullPath]) this.paths[fullPath] = {};
    this.paths[fullPath][method] = {
      responses: { 200: { description: 'OK' }, ...config.responses },
      summary: config.summary,
    };
  }

  static build() {
    return this.paths;
  }
}

export default {
  openapi: '3.0.0',
  info: {
    title: 'SpeedyDo API',
    version: '1.0.0',
    description: 'Документация API для проекта SpeedyDo',
  },
  servers: [
    {
      url: API_URL,
    },
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key',
      },
    },
  },
  security: [
    {
      ApiKeyAuth: [],
    },
  ],
  paths: SwaggerBuilder.build(),
};
