import React from 'react';
import Page from './Page.jsx';
import Wrapper from './Wrapper.jsx';
import MouseTracker from '../mouse/MouseTracker.jsx';

const MousePage = () => (
  <Page>
    <Wrapper>
      <MouseTracker />
    </Wrapper>
  </Page>
);

export default MousePage;
