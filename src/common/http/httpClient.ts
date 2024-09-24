import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as https from 'https';

interface HttpResponse<T> {
  data: T;
  status: number;
}

@Injectable()
export class HttpClient {
  private httpsAgent: https.Agent;

  constructor(private configService: ConfigService) {
    this.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  }
  async get<T>(
    url: string,
    headers?: AxiosRequestConfig,
  ): Promise<HttpResponse<T>> {
    try {
      const config: AxiosRequestConfig = {
        ...headers,
        httpsAgent: this.httpsAgent,
      };
      const response: AxiosResponse<T> = await axios.get(url, config);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      throw error;
    }
  }

  async post<T>(
    url: string,
    data: any,
    headers?: AxiosRequestConfig,
  ): Promise<HttpResponse<T>> {
    try {
      const config: AxiosRequestConfig = {
        ...headers,
        httpsAgent: this.httpsAgent,
      };
      const response: AxiosResponse<T> = await axios.post(url, data, config);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete<T>(
    url: string,
    data?: any,
    headers?: AxiosRequestConfig,
  ): Promise<HttpResponse<T>> {
    try {
      const config: AxiosRequestConfig = {
        ...headers,
        httpsAgent: this.httpsAgent,
        data: data,
      };
      const response: AxiosResponse<T> = await axios.delete(url, config);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async patch<T>(
    url: string,
    data: any,
    headers?: AxiosRequestConfig,
  ): Promise<HttpResponse<T>> {
    try {
      const config: AxiosRequestConfig = {
        ...headers,
        httpsAgent: this.httpsAgent,
      };
      const response: AxiosResponse<T> = await axios.patch(url, data, config);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
