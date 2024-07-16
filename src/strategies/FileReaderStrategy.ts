export interface FileReaderStrategy {
    read(path: string): Promise<string>;
}