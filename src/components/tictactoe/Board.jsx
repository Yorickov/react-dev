import React from 'react';
import PropTypes from 'prop-types';
import { chunk } from 'lodash';
import Square from './Square.jsx';

const Board = (props) => {
  const { squares, onClick: handleClick } = props;

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      onClick={handleClick(i)}
    />
  );

  const renderRows = (fn) => {
    const row = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <td key={i}>{fn(i)}</td>
    ));
    return chunk(row, 3)
      .map((item, i) => <tr key={i}>{item}</tr>);
  };

  return (
    <table className="table table-bordered">
      <tbody>
        {renderRows(renderSquare)}
      </tbody>
    </table>
  );
};

Board.propTypes = {
  squares: PropTypes.array,
  onClick: PropTypes.func,
};

export default Board;
