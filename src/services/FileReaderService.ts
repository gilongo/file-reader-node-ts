import { FileReaderContext } from "../contexts/FileReaderContext";
import { LocalFileReader } from "../strategies/LocalFileReader";
import { URLFileReader } from "../strategies/URLFileReader";
import { StringCounter } from "../utils/stringCounter";
import { StringValidation } from "../utils/stringValidation";

interface ResponseData {
    words: number,
    letters: number,
    whitespaces: number,
    repeatingWords: Array<[string, number]>,
}

export class FileReaderService {

    static fileReaderContext = new FileReaderContext(new LocalFileReader());

    static async readUserFile(askedPath: string) {
        let response: {message: string, data: ResponseData, error?: any} = 
        { message: '', data: { words: 0, letters: 0, whitespaces: 0, repeatingWords: []}};

        let content: string | null = null;

       
        try {
            if(StringValidation.isLocalPath(askedPath)){
                this.fileReaderContext.setStrategy(new LocalFileReader());
                content = await this.fileReaderContext.read(askedPath);
            }

            if(StringValidation.isValidURL(askedPath)){
                this.fileReaderContext.setStrategy(new URLFileReader());
                content = await this.fileReaderContext.read(askedPath);
            }
    
            if (content !== null && content.length > 0) {
                response.data.words = StringCounter.countWords(content);
                response.data.letters = StringCounter.countLetters(content);
                response.data.whitespaces = StringCounter.countWhitespaces(content);
                response.data.repeatingWords = StringCounter.countRepeatingWords(content, parseInt(process.env.TIMES || '10'));
    
                response.message = 'File read successfully';
            } else {
                response.message = 'File empty or not in valid format';
            }

        } catch(error) {
                response.error = error instanceof Error ? error.message : error;
                response.message = 'An error occurred while reading the file';
                console.error(error);
        }

        return response;
    }
}