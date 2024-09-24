import { HttpException, Injectable } from '@nestjs/common';
import { CreateTransationDto } from './dto';
import { HttpClient } from '../../common/http/httpClient';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { ITransaction } from './interfaces';
import { amountHelpers } from '../../common/utils';
import { ReceivablesService } from '../receivable/receivable.service';

@Injectable()
export class TransactionService {
  private readonly tiendaNubeTransationUrl: string;

  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService,
    private readonly receivablesService: ReceivablesService,
  ) {
    this.tiendaNubeTransationUrl = this.configService.get(
      'app.tiendaNubeTransactionUrl',
    );
  }

  async getTransactions(): Promise<ITransaction[]> {
    try {
      const url = `${this.tiendaNubeTransationUrl}/transactions`;
      const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const transactions = await this.http.get<ITransaction[]>(url, options);
      return transactions.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async getTransaction(id: string): Promise<ITransaction> {
    try {
      const url = `${this.tiendaNubeTransationUrl}/transactions/${id}`;
      const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const transaction = await this.http.get<ITransaction>(url, options);
      return transaction.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async getMerchantTransaction(code: string): Promise<ITransaction[]> {
    try {
      const url = `${this.tiendaNubeTransationUrl}/transactions?merchantCode=${code}`;
      const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const transaction = await this.http.get<ITransaction[]>(url, options);
      return transaction.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async deleteTransaction(id: string): Promise<ITransaction> {
    try {
      const url = `${this.tiendaNubeTransationUrl}/transactions/${id}`;
      const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const transaction = await this.http.delete<ITransaction>(url, options);
      return transaction.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async createTransaction(req: CreateTransationDto): Promise<any> {
    try {
      const url = `${this.tiendaNubeTransationUrl}/transactions`;
      const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          ...req,
          createdAt: new Date().toISOString(),
        },
      };
      const transactionData = await this.http.post<ITransaction>(
        url,
        options.data,
        { headers: options.headers },
      );
      const transaction = transactionData.data;
      const discount = transaction.method === 'credit_card' ? '4' : '2';
      const total = amountHelpers
        .calculateRemainingAmount(Number(transaction.value), Number(discount))
        .toString();
      const receivable = await this.receivablesService.createReceivable({
        transactionId: transaction.id,
        merchantCode: transaction.merchantCode,
        status: transaction.method === 'credit_card' ? 'waiting_funds' : 'paid',
        subtotal: transaction.value,
        discount,
        total,
      });
      return {
        transaction,
        receivable,
      };
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }
}
