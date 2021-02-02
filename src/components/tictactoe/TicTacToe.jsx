import React, { useState } from 'react';
import Board from './Board.jsx';
import { calculateWinner } from '../../lib/utils';

const TicTacToe = () => {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
  }]);
  const [xIsNext, setSign] = useState(true);
  const [stepNumber, setStep] = useState(0);

  const handleClick = (i) => () => {
    const actualHistory = history.slice(0, stepNumber + 1);
    const { squares } = actualHistory[actualHistory.length - 1];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const sign = xIsNext ? 'X' : 'O';
    const newSquares = [
      ...squares.slice(0, i), sign, ...squares.slice(i + 1),
    ];

    setHistory([...actualHistory, { squares: newSquares }]);
    setStep(actualHistory.length);
    setSign(!xIsNext);
  };

  const jumpTo = (step) => {
    setStep(step);
    setSign((step % 2) === 0);
  };

  const moves = history.map((step, move) => {
    const description = (move === 0) ? 'To the start' : `Move to step #${move}`;
    return (
      <li key={move}>
        <button onClick={jumpTo.bind(null, move)}>{description}</button>
      </li>
    );
  });

  const { squares } = history[stepNumber];
  const winner = calculateWinner(squares);
  const status = winner ? (`The winner is ${winner}`)
    : `Next step: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="row">
      <div className="col-auto game-board">
        <Board
          squares={squares}
          onClick={handleClick}
        />
      </div>
      <div className="col-8 game-info">
        <div className='status'>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default TicTacToe;
