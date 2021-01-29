import React from 'react';
import Page from './Page.jsx';
import Wrapper from './Wrapper.jsx';
import TodoBox from '../todo-middle/TodoBox.jsx';

const MousePage = () => (
  <Page>
    <Wrapper>
      <TodoBox />
    </Wrapper>
  </Page>
);

export default MousePage;
