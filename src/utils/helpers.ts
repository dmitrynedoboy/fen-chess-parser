import { FEN_SYMBOLS } from './constants';

function splitFEN(fenString: string): string[] {
    return fenString.trim().split(' ')[0].split('/');
}

function isValidFEN(fenString: string): boolean {
    const rows = splitFEN(fenString);

    if (rows.length !== 8) return false;

    for (let row of rows) {
        let count = 0;
        for (let char of row) {
            if (/^[1-8]$/.test(char)) {
                count += parseInt(char);
            } else if (FEN_SYMBOLS.includes(char)) {
                count += 1;
            } else {
                return false;
            }
        }
        if (count !== 8) return false;
    }

    return true;
}

const parseFEN = (fenString: string) => {
    if (isValidFEN(fenString)) {
        const rows = splitFEN(fenString);
        const boardArray = rows.map((row) => {
            let parsedRow: string[] = [];
            for (let char of row) {
                const number = parseInt(char);
                if (isNaN(number)) {
                    parsedRow.push(char);
                } else {
                    for (let i = 0; i < number; i++) {
                        parsedRow.push('');
                    }
                }
            }
            return parsedRow;
        });
        return boardArray;
    } else {
        throw new Error('Строка FEN некорректна');
    }
};

export { parseFEN };
