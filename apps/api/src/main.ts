import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './documentation/swagger';
import { logger } from './middlewares/logger.middleware';
import { ApiTestRouter } from './routers/apitest.router';
import { enableSecurity } from './middlewares/security.middleware';
import { API_URL, HOST, PORT, SWAGGER_URL } from './consts/settings';
import { connectDB } from './database/mongoose';

const app = express();

enableSecurity(app);

app.use(logger);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/apitest', ApiTestRouter);

app.listen(PORT, HOST, async () => {
  await connectDB();
  console.log(`[ ready ] ${API_URL}`);
  console.log(`[ swagger ] ${SWAGGER_URL}`);
});
