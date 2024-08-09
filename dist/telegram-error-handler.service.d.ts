export declare class TelegramErrorHandlerService {
    private readonly token;
    private axiosInstance;
    constructor(token: string);
    /**
     * Reports an error to Your Telegram using the configured Axios instance.
     * @param e The error to be reported.
     * @returns A promise that resolves to a string confirming the error was reported.
     */
    report(e: any): Promise<string>;
}
