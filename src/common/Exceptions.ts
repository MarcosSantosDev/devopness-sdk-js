import { AxiosError, AxiosResponse } from 'axios'

export class SdkError extends Error {
}

export class ArgumentNullException extends SdkError {
    constructor(public param: string, method?: string, msg?: string) {
        super(msg || `Devopness SDK Error - Value cannot be null. Missing required parameter: "${param}" when calling "${method}"`);
    }
}

export interface ErrorResponseData {
    message: string | undefined;
    errors?: Array<Record<string, string>>;
}

export class NetworkError extends SdkError {
    constructor(error: AxiosError) {
        super(`Devopness SDK Network Error - ${error.message}`);
    }
}

export class ApiError<T> extends SdkError {
    errors?: Array<Record<string, string>>;
    response?: AxiosResponse<T>;
    status: number;

    constructor(error: AxiosError) {
        if (!error.response) {
            throw error;
        }
        super('Devopness API response error');

        this.setMessage(error.message);
        this.status = error.response.status;

        if (error.response.data) {
            const data = (error.response.data as ErrorResponseData);
            this.errors = data.errors;
            if (data.message) {
                // the `response.data` message might be more specific on helping diagnosing the
                // error root cause, so we set it as this ApiError message, when present
                this.setMessage(data.message);
            }
        }

        if (!this.message) {
            // if the message remains unset after checking for `error.message` and `error.response.data.message`
            // we use the `statusText` that usually contains a short the description of the HTTP status code
            // when an exception is an HTTP error
            this.setMessage(error.response?.statusText);
        }
    }

    private getFormattedMessage(message?: string): string {
        // we adopt the `Response` prefix instead of `Error` here cause most returned messages are validation/security related
        // messages that prevent damage to be caused to user's data and it's not exactly and exception.
        // A real error, e.g. HTTP 5xx status codes, will be absolutely rare. Real errors like
        // NetworkError are handled in their own Error classes in this file.
        const SDK_ERROR_MESSAGE_PREFIX = 'API Response';
        return `${SDK_ERROR_MESSAGE_PREFIX}: ${message}`;
    }

    private setMessage(message: string): void {
        this.message = this.getFormattedMessage(message);
    }
}
