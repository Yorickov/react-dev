import React from 'react';
import { Helmet } from 'react-helmet';
import MiscComponents from './simple/index.jsx';
import Carousel from './Carousel.jsx';
import Collapse from './Collapse.jsx';
import SignUpDialog from './composition/SignUpDialog.jsx';
import MyForm from './MyForm.jsx';
import Logger from './Logger.jsx';
import TodoBox from './todo/TodoBox.jsx';
import ModalComponent from './modal/ModalComponent.jsx';
import Clock from './Clock.jsx';
import Autocomplete from './Autocomplete.jsx';

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
    <MyForm />
    <Logger />
    <TodoBox />
    <ModalComponent />
    <Clock />
    <Autocomplete />
  </div>
);

export default App;
