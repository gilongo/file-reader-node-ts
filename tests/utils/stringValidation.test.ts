import { StringValidation } from "../../src/utils/stringValidation";


describe('StringValidation', () => {
    describe('isValidURL', () => {
        test('should be return a valid url', () => {
            expect(StringValidation.isValidURL('https://www.google.com')).toBe(true);
            expect(StringValidation.isValidURL('https://github.com/test/README.md')).toBe(true);
            expect(StringValidation.isValidURL('https://jestjs.io/docs/getting-started')).toBe(true);
            expect(StringValidation.isValidURL('https://github.com/gilongo/file-reader-node-ts/blob/main/files/test.txt')).toBe(true);
        });

        test('should be return a invalid url', () => {
            expect(StringValidation.isValidURL('google.com')).toBe(false);
            expect(StringValidation.isValidURL('htp://test.com')).toBe(false);
            expect(StringValidation.isValidURL('ftp://///test/folder')).toBe(false);
            expect(StringValidation.isValidURL('ycgheui')).toBe(false);
            expect(StringValidation.isValidURL('https://')).toBe(false);
        });

        test('should return false for a local file path interpreted as URL', () => {
            expect(StringValidation.isValidURL('c://test/test')).toBe(false);
            expect(StringValidation.isValidURL('file:///C:/path/to/file')).toBe(false);
        });
    });

    describe('isLocalPath', () => {
        test('should return true for a local path', () => {
            expect(StringValidation.isLocalPath('/usr/local/bin')).toBe(true);
            expect(StringValidation.isLocalPath('C:\\Program Files')).toBe(true);
            expect(StringValidation.isLocalPath('~/Documents')).toBe(true);
            expect(StringValidation.isLocalPath('./relative/path')).toBe(true);
            expect(StringValidation.isLocalPath('../relative/path')).toBe(true);
        });

        test('should return false for a non-local path', () => {
            expect(StringValidation.isLocalPath('https://www.example.com')).toBe(false);
            expect(StringValidation.isLocalPath('ftp://example.com')).toBe(false);
            expect(StringValidation.isLocalPath('C|Program Files')).toBe(false);
            expect(StringValidation.isLocalPath('relative/path')).toBe(false);
        });
    });
})