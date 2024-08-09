import { DynamicModule, Module } from '@nestjs/common';
import { TelegramErrorHandlerService } from './telegram-error-handler.service';

@Module({})
export class TelegramErrorHandlerModule {
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