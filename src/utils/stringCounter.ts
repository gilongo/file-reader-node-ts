export class StringCounter {
    static countWords(str: string): number {
        const words = str.match(/\b[a-zA-Z]+\b/g);
        return words ? words.length : 0;
    }

    static countLetters(str: string): number {
        str = str.replace(/\s/g, '');
        return str.trim().length;
    }

    static countWhitespaces(str: string): number {
        let whitespaces: number = 0;

        for (let i = 0; i < str.length; i++) {  
            if (str[i] === ' ') {   
                whitespaces++;
            }
        }

        return whitespaces;
    }

    static countRepeatingWords(str: string, times: number): Array<[string, number]> {
        const words = str.trim().split(/\s+/);
        let repeatingWords: Map<string, number> = new Map();

        words.forEach((word) => {
            if(word.match(/\b[a-zA-Z]+\b/g)){
                if (repeatingWords.has(word)) {
                    repeatingWords.set(word, (repeatingWords.get(word) || 0) + 1);
                } else {
                    repeatingWords.set(word, 1);
                }
            }
        });

        return [...repeatingWords.entries()].filter(([_, count]) => count >= times);
    }
}