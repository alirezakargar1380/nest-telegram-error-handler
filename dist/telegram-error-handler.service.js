"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramErrorHandlerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let TelegramErrorHandlerService = class TelegramErrorHandlerService {
    constructor(token) {
        this.token = token;
        this.axiosInstance = axios_1.default.create({
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
    async report(e) {
        return await this.axiosInstance.post('/messenger', {
            error: e,
        }).then(() => 'Error reported to Telegram');
    }
};
exports.TelegramErrorHandlerService = TelegramErrorHandlerService;
exports.TelegramErrorHandlerService = TelegramErrorHandlerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TOKEN')),
    __metadata("design:paramtypes", [String])
], TelegramErrorHandlerService);
//# sourceMappingURL=telegram-error-handler.service.js.map