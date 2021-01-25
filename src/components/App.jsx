import React from 'react';
import { Helmet } from 'react-helmet';
import MiscComponents from './simple/index.jsx';
import Carousel from './Carousel.jsx';
import Collapse from './Collapse.jsx';
import SignUpDialog from './composition/SignUpDialog.jsx';

const images = ['first.jpeg', 'second.jpeg', 'third.jpeg'];

const App = () => (
  <div className="container">
    <Helmet>
      <title>React Application</title>
    </Helmet>
    <MiscComponents />
    <Carousel images={images} />
    <Collapse text="hi!!" />
    <SignUpDialog />
  </div>
);

export default App;
