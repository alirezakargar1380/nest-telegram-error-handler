import { DynamicModule, Module } from '@nestjs/common';
import { TelegramErrorHandlerService } from './telegram-error-handler.service';

@Module({})
export class TelegramErrorHandlerModule {
  /**
   * Configures and initializes the TelegramErrorHandlerModule.
   * @param token The token obtained from the Telegram bot https://t.me/tel_error_handler_bot
   * @returns A DynamicModule configured with the provided token
   */
  static forRoot(token: string): DynamicModule {
    return {
      module: TelegramErrorHandlerModule,
      providers: [
        {
          provide: 'TOKEN',
          useValue: token,
        },
        TelegramErrorHandlerService,
      ],
      exports: [TelegramErrorHandlerService],
    };
  }
}