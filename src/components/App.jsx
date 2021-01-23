import React from 'react';
import { Helmet } from 'react-helmet';
import MiscComponents from './simple/index.jsx';

const App = () => (
  <div className="container">
    <Helmet>
      <title>React Application</title>
    </Helmet>
    <MiscComponents />
  </div>
);

export default App;
