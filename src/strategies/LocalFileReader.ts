import { FileReaderStrategy } from "./FileReaderStrategy";
import * as fs from "fs/promises";

export class LocalFileReader implements FileReaderStrategy {
    async read(path: string): Promise<string> {
        if (await this.checkIfFileExists(path)) {
            throw new Error("File not found");
        }
        return await fs.readFile(path, "utf8");
    }

    protected checkIfFileExists(path: string) {
        return new Promise((resolve) => {
            resolve(fs.access(path, fs.constants.F_OK))
        })
    }
}