import React from 'react';
import Page from './Page.jsx';
import Wrapper from './Wrapper.jsx';
import MyForm from '../MyForm.jsx';
import Logger from '../Logger.jsx';
import TodoBox from '../todo/TodoBox.jsx';

const SmallPage = () => (
  <Page>
    <Wrapper>
      <MyForm />
      <Logger />
      <TodoBox />
    </Wrapper>
  </Page>
);

export default SmallPage;
