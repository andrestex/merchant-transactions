/* eslint-disable @typescript-eslint/no-var-requires */
import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const displayRoutes = require('express-routemap');

export const displayInformation = (
  configService: ConfigService,
  app: INestApplication,
) => {
  const port = configService.get('app.port');
  const env = configService.get('app.env');
  Logger.log(`listening on port ${port}`);
  Logger.log(`running environment NODE_ENV=${env}`);
  displayRoutes(app.getHttpServer()._events.request._router);
};
