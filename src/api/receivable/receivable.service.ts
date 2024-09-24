import { HttpException, Injectable } from '@nestjs/common';
import { CreateReceivableDto } from './dto';
import { HttpClient } from '../../common/http/httpClient';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { IReceivable } from './interfaces';

@Injectable()
export class ReceivablesService {
  private readonly tiendaNubeReceivableUrl: string;

  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService,
  ) {
    this.tiendaNubeReceivableUrl = this.configService.get(
      'app.tiendaNubeReceivableUrl',
    );
  }
  async getReceivables(): Promise<IReceivable[]> {
    try {
      const url = `${this.tiendaNubeReceivableUrl}/receivables`;
      console.log(this.tiendaNubeReceivableUrl);
      const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const receivables = await this.http.get<IReceivable[]>(url, options);
      return receivables.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async getReceivable(id: string): Promise<IReceivable> {
    try {
      const url = `${this.tiendaNubeReceivableUrl}/receivables/${id}`;
      const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const receivable = await this.http.get<IReceivable>(url, options);
      return receivable.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async createReceivable(req: CreateReceivableDto): Promise<IReceivable> {
    try {
      const url = `${this.tiendaNubeReceivableUrl}/receivables`;
      const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          ...req,
          create_date: new Date().toISOString(),
        } as IReceivable,
      };
      const receivables = await this.http.post<IReceivable>(url, options.data, {
        headers: options.headers,
      });
      return receivables.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }
}
