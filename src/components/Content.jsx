import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import HomePage from './pages/HomePage.jsx';
import SimplePage from './pages/SimplePage.jsx';
import SmallPage from './pages/SmallPage.jsx';
import BigPage from './pages/BigPage.jsx';
import CarouselPage from './pages/CarouselPage.jsx';
import MousePage from './pages/MousePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import TodoPage from './pages/TodoPage.jsx';
import TicTacToePage from './pages/TicTacToePage.jsx';

const Content = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/simple">
      <SimplePage />
    </Route>
    <Route path="/small">
      <SmallPage />
    </Route>
    <Route path="/big">
      <BigPage />
    </Route>
    <Route path="/carousel">
      <CarouselPage />
    </Route>
    <Route path="/mouse">
      <MousePage />
    </Route>
    <Route path="/products">
      <ProductsPage />
    </Route>
    <Route path="/todo">
      <TodoPage />
    </Route>
    <Route path="/tictactoe">
      <TicTacToePage />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Content;
