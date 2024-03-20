import { useState } from "react";
import styles from "./TicTacToe.module.css";

const WIN_COND = [
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
  ],
  [
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
  ],
  [
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 },
  ],
  [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 1 },
    { row: 2, col: 0 },
  ],
];

type BoardType = (null | "X" | "O")[][];
type GameType = {
  turn: "X" | "O";
  board: BoardType;
};
const initialState: GameType = {
  turn: "X",
  board: Array(3).fill(Array(3).fill(null)),
};
export default function TicTacToe() {
  const [game, setGame] = useState<GameType>(initialState);

  function handleToggleTurn(row: number, col: number) {
    if (game.board[row][col]) return;

    const newBoard = game.board.map((rowArray, rowIndex) =>
      rowArray.map((cell, colIndex) =>
        row === rowIndex && col === colIndex ? game.turn : cell,
      ),
    );
    setGame((cur) => ({
      ...cur,
      board: newBoard,
      turn: cur.turn === "X" ? "O" : "X",
    }));
  }

  function calculateWinner(board: BoardType) {
    for (let i = 0; i < WIN_COND.length; i++) {
      const [a, b, c] = WIN_COND[i];
      if (
        board[a.row][a.col] &&
        board[a.row][a.col] === board[b.row][b.col] &&
        board[a.row][a.col] === board[c.row][c.col]
      ) {
        return board[a.row][a.col];
      }
    }
    return null;
  }

  function isBoardFull(board: BoardType): boolean {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === null) {
          return false;
        }
      }
    }
    return true;
  }

  const winner = calculateWinner(game.board);
  const draw = isBoardFull(game.board) && !winner;

  // console.log(draw);

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        {game.board.map((row, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {row.map((cell, colIndex) => (
              <button
                disabled={
                  winner !== null ||
                  draw ||
                  game.board[rowIndex][colIndex] !== null
                }
                className={styles.square}
                key={colIndex}
                onClick={() => handleToggleTurn(rowIndex, colIndex)}
              >
                {cell}
              </button>
            ))}
          </div>
        ))}
        <div className={styles.actions}>
          {!winner && !draw && <p>{game.turn} Turn!</p>}
          {!winner && draw && <p>Draw</p>}
          {winner && <p>{winner} won</p>}
          <button
            className={styles.reset}
            onClick={() => setGame(initialState)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
