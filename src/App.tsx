/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Product from './pages/Product';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      { /* prettier-ignore */ }
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/:id"> <Product /> </Route>

        <Route>404</Route>
      </Switch>

      <GlobalStyles />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
