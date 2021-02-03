import React from 'react';
import Page from './Page.jsx';
import Wrapper from './Wrapper.jsx';
import MyForm from '../MyForm.jsx';
import Logger from '../Logger.jsx';
import TodoBox from '../todo-small/TodoBox.jsx';
import TodoBoxR from '../todo-small-reducer/TodoBoxR.jsx';

const BigPage = () => (
  <Page>
    <Wrapper>
      <MyForm />
      <Logger />
      <TodoBox />
      <TodoBoxR />
    </Wrapper>
  </Page>
);

export default BigPage;
