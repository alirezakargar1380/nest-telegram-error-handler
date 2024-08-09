import { DynamicModule } from '@nestjs/common';
export declare class TelegramErrorHandlerModule {
    /**
     * Configures and initializes the TelegramErrorHandlerModule.
     * @param token The token obtained from the Telegram bot https://t.me/tel_error_handler_bot
     * @returns A DynamicModule configured with the provided token
     */
    static forRoot(token: string): DynamicModule;
}
