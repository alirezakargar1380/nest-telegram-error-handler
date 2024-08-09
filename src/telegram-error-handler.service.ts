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

  /**
   * Reports an error to Your Telegram using the configured Axios instance.
   * @param e The error to be reported.
   * @returns A promise that resolves to a string confirming the error was reported.
   */
  async report(e: any): Promise<string> {
    return await this.axiosInstance.post('/messenger', {
      error: e,
    }).then(() => 'Error reported to Telegram');
  }
}