import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { pipeValidation as exceptionFactory } from './common/validations';
import { displayInformation } from './common/utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const version = configService.get('app.version');

  app.setGlobalPrefix(`/merchant-transations-api/${version}`);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      validateCustomDecorators: true,
      stopAtFirstError: true,
      exceptionFactory,
    }),
  );
  await app.listen(configService.get('app.port'), () =>
    displayInformation(configService, app),
  );
}
bootstrap();
