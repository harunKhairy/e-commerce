import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSingUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSingUpPage} />

      </Switch>
    </div>
  );
}

export default App;
