const FEN_SYMBOLS: string[] = [
    'p',
    'n',
    'b',
    'r',
    'q',
    'k',
    'P',
    'N',
    'B',
    'R',
    'Q',
    'K'
];

const FEN_TO_UNICODE: Record<string, string> = {
    P: '♙',
    N: '♘',
    B: '♗',
    R: '♖',
    Q: '♕',
    K: '♔',
    p: '♟',
    n: '♞',
    b: '♝',
    r: '♜',
    q: '♛',
    k: '♚'
};

export { FEN_SYMBOLS, FEN_TO_UNICODE };
