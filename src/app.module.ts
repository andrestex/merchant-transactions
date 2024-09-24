import { Module } from '@nestjs/common';
import { HealthModule } from './api/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './common/config';
import { envValidate as validate } from './common/validations';
import { TransactionModule } from './api/transaction/transation.module';
import { ReceivableModule } from './api/receivable/receivable.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
      validate,
    }),
    HealthModule,
    TransactionModule,
    ReceivableModule,
  ],
})
export class AppModule {}
