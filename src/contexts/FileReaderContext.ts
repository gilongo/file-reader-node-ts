import { FileReaderStrategy } from "../strategies/FileReaderStrategy";

export class FileReaderContext {
    private strategy: FileReaderStrategy;

    constructor(strategy: FileReaderStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: FileReaderStrategy) {
        this.strategy = strategy;
    }

    async read(path: string): Promise<string> {
        return await this.strategy.read(path);
    }
}