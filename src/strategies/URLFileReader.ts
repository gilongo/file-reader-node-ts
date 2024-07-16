import { FileReaderStrategy } from "./FileReaderStrategy";
import axios from "axios";

export class URLFileReader implements FileReaderStrategy {
    async read(url: string): Promise<string> {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
              console.error(`Axios error: ${error.message}`);
            } else {
              console.error(`Unexpected error: ${error}`);
            }

            throw new Error(`Failed to read file from URL: ${url}`);
        }
    }
}