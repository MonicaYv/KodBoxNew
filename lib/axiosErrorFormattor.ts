import { AxiosError, isAxiosError } from 'axios';

type BackendHandledError = {
    success: boolean;
    message: string;
    data: {
        error: string;
    }
}

export default function axiosErrorFormatter(e: any): string {
    if(process.env.NODE_ENV === "development"){
        console.log(e.message);
    }
    if (isAxiosError(e)) {
        if (e.response?.data) {
            let rd = e.response.data as BackendHandledError;
            return rd.message;
        } else {
            return e.message;
        }
    } else {
        return 'An unexpected error occurred';
    }
}