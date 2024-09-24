import { Module } from '@nestjs/common';
import { ReceivableController } from './receivable.controller';
import { ReceivablesService } from './receivable.service';
import { HttpClient } from '../../common/http/httpClient';

@Module({
  controllers: [ReceivableController],
  providers: [ReceivablesService, HttpClient],
})
export class ReceivableModule {}
