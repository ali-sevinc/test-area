import { useState } from "react";

import styles from "./TicTacv2.module.css";

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

type BoardType = ("X" | "O" | null)[][];
type GameState = {
  turn: "X" | "O";
  board: BoardType;
};
const initialState: GameState = {
  turn: "X",
  board: Array(3).fill(Array(3).fill(null)),
};
export default function TicToc() {
  const [game, setGame] = useState<GameState>(initialState);

  function handleGame(row: number, col: number) {
    if (game.board[row][col]) return;
    const newBoard = game.board.map((rows, rowIdx) =>
      rows.map((cell, colIdx) => {
        return row === rowIdx && col === colIdx ? game.turn : cell;
      })
    );
    // console.log(newBoard);

    setGame((cur) => ({
      ...cur,
      board: newBoard,
      turn: cur.turn === "X" ? "O" : "X",
    }));
  }

  const winner = handleCalculateWinner(game.board);
  const draw = handleDraw(game.board) && !winner;
  //   console.log(winner);
  //   console.log(draw);
  return (
    <div className={styles.container}>
      {game.board.map((row, rowIdx) => (
        <div className={styles.row} key={rowIdx}>
          {row.map((cell, colIdx) => (
            <button
              disabled={winner !== undefined || draw}
              onClick={() => handleGame(rowIdx, colIdx)}
              className={styles.cell}
              key={colIdx}
            >
              {cell}
            </button>
          ))}
        </div>
      ))}

      <div className={styles.results}>
        {draw && <p>Draw!</p>}
        {winner !== undefined && <p>{winner} Won!</p>}
        {!draw && !winner && <p>{game.turn}'s Turn!</p>}
        {(draw || winner !== undefined) && (
          <button onClick={() => setGame(initialState)}>Reset</button>
        )}
      </div>
    </div>
  );
}

function handleCalculateWinner(board: BoardType) {
  let winner: "X" | "O" | undefined;
  for (let cond = 0; cond < WIN_COND.length; cond++) {
    const [a, b, c] = WIN_COND[cond];
    if (
      board[a.row][a.col] &&
      board[a.row][a.col] === board[b.row][b.col] &&
      board[a.row][a.col] === board[c.row][c.col]
    ) {
      if (board[a.row][a.col] === "X") {
        winner = "X";
      }
      if (board[a.row][a.col] === "O") {
        winner = "O";
      }
    }
  }
  return winner;
}

function handleDraw(board: BoardType) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === null) {
        return false;
      }
    }
  }
  return true;
}
