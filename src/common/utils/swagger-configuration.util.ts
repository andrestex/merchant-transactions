import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerConfiguration = (
  configService: ConfigService,
  app: INestApplication,
) => {
  const swaggerDescription = configService.get<string>(
    'app.swaggerDescription',
  );
  const version = configService.get<string>('app.version');
  const config = new DocumentBuilder()
    .setTitle('Merchant Transations API')
    .setDescription(
      swaggerDescription || 'API for the Merchant Transactions Microservice',
    )
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(
    `/merchant-transations-api//${version}/api-docs`,
    app,
    document,
  );
};
