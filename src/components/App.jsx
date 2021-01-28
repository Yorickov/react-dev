import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav.jsx';
import Content from './Content.jsx';

const App = () => (
  <Router>
    <div className="container">
      <Helmet>
        <title>React Application</title>
      </Helmet>
      <Nav />
      <Content />
    </div>
  </Router>
);

export default App;
