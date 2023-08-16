import { FC, useState } from 'react';

import { parseFEN } from './utils/helpers';
import { FEN_TO_UNICODE } from './utils/constants';

import './App.css';

const App: FC = () => {
    const [fen, setFen] = useState<string>('');
    const [board, setBoard] = useState<string[][]>([]);
    const [errorMsg, setErrorMsg] = useState<string>('');

    const handleShowBoard = () => {
        if (errorMsg) {
            setErrorMsg('');
        }

        try {
            const boardArray = parseFEN(fen);
            setBoard(boardArray);
        } catch (err: unknown) {
            const { message: errMsg } = err as Error;
            setErrorMsg(errMsg);
        }
    };

    return (
        <main className="fen-parser fen-parser__container">
            <h1 className="fen-parser__header">Парсер FEN строки</h1>
            <section className="fen-parser__container fen-parser__container_width">
                <input
                    className="fen-parser__input"
                    type="text"
                    value={fen}
                    onChange={(e) => setFen(e.target.value)}
                    placeholder="Введите FEN строку"
                />
                {errorMsg && (
                    <div className="fen-parser__message_error">{errorMsg}</div>
                )}
                <button
                    className="fen-parser__button"
                    onClick={() => handleShowBoard()}>
                    Отобразить доску
                </button>
            </section>
            <section className="fen-parser__container full-width">
                <div className="fen-parser__board">
                    {board.map((row, rowIndex) => (
                        <div className="fen-parser__row" key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <div
                                    className={`fen-parser__cell`}
                                    key={cellIndex}>
                                    {cell && FEN_TO_UNICODE[cell]}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default App;
