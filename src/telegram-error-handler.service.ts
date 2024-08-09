import { Inject, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class TelegramErrorHandlerService {
  private axiosInstance: AxiosInstance;

  constructor(@Inject('TOKEN') private readonly token: string) {
    this.axiosInstance = axios.create({
      baseURL: `http://localhost:3000/api`,
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  async report(e: any): Promise<string> {
    return await this.axiosInstance.post('/messenger', {
      error: e,
    }).then(() => 'Error reported to Telegram');
  }
}