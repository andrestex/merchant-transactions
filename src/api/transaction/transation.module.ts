import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { HttpClient } from '../../common/http/httpClient';
import { ReceivablesService } from '../receivable/receivable.service';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService, HttpClient, ReceivablesService],
})
export class TransactionModule {}
