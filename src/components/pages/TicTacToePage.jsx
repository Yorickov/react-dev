import React from 'react';
import Page from './Page.jsx';
import Wrapper from './Wrapper.jsx';
import TicTacToe from '../tictactoe/TicTacToe.jsx';

const TicTacToePage = () => (
  <Page>
    <Wrapper>
      <TicTacToe />
    </Wrapper>
  </Page>
);

export default TicTacToePage;
