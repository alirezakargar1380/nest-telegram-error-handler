export declare class TelegramErrorHandlerService {
    private readonly token;
    private axiosInstance;
    constructor(token: string);
    report(e: any): Promise<string>;
}
