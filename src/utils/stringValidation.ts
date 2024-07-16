export class StringValidation {
    static isValidURL(url: string): boolean {
        try {
            new URL(url);
            return true;
          } catch (e) {
            return false;
          }
    }

    static isLocalPath(str: string): boolean {
        const pattern = /^(\/|[a-zA-Z]:\\|~\/|\.\/|\.\.\/)/;
        return pattern.test(str);
    }
}