"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TelegramErrorHandlerModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramErrorHandlerModule = void 0;
const common_1 = require("@nestjs/common");
const telegram_error_handler_service_1 = require("./telegram-error-handler.service");
let TelegramErrorHandlerModule = TelegramErrorHandlerModule_1 = class TelegramErrorHandlerModule {
    /**
     * Configures and initializes the TelegramErrorHandlerModule.
     * @param token The token obtained from the Telegram bot https://t.me/tel_error_handler_bot
     * @returns A DynamicModule configured with the provided token
     */
    static forRoot(token) {
        return {
            module: TelegramErrorHandlerModule_1,
            providers: [
                {
                    provide: 'TOKEN',
                    useValue: token,
                },
                telegram_error_handler_service_1.TelegramErrorHandlerService,
            ],
            exports: [telegram_error_handler_service_1.TelegramErrorHandlerService],
        };
    }
};
exports.TelegramErrorHandlerModule = TelegramErrorHandlerModule;
exports.TelegramErrorHandlerModule = TelegramErrorHandlerModule = TelegramErrorHandlerModule_1 = __decorate([
    (0, common_1.Module)({})
], TelegramErrorHandlerModule);
//# sourceMappingURL=telegram-error-handler.module.js.map