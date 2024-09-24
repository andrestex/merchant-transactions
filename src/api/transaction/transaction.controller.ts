import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TransactionService } from './transaction.service';
import { CreateTransationDto } from './dto';
import { ITransaction } from './interfaces';

@ApiTags('Transaction')
@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('')
  async getTransations(): Promise<ITransaction[]> {
    return await this.transactionService.getTransactions();
  }

  @Post('')
  async createTransaction(@Body() req: CreateTransationDto): Promise<any> {
    return await this.transactionService.createTransaction(req);
  }

  @Get(':id')
  async getTransaction(@Param('id') id: string): Promise<ITransaction> {
    return await this.transactionService.getTransaction(id);
  }

  @Get('/merchant/:code')
  async getMerchantTransaction(
    @Param('code') code: string,
  ): Promise<ITransaction[]> {
    return await this.transactionService.getMerchantTransaction(code);
  }

  @Delete(':id')
  async deleteTransaction(@Param('id') id: string): Promise<ITransaction> {
    return await this.transactionService.deleteTransaction(id);
  }
}
