export class StringValidation {
    static isValidURL(url: string): boolean {
        try {
            const parsedUrl = new URL(url);
            return ['http:', 'https:'].includes(parsedUrl.protocol);
          } catch (e) {
            return false;
          }
    }

    static isLocalPath(str: string): boolean {
        const pattern = /^(\/|[a-zA-Z]:\\|~\/|\.\/|\.\.\/)/;
        return pattern.test(str);
    }
}