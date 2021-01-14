import './App.css';
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pizza from './pages/order/pizza';
import Ingredients from './pages/ingredients';
import Calzone from './pages/order/calzone';
import NotFoundPage from './pages/404';
import { IngredientsProvider } from './IngredientsContext';

function App() {
  return (
    <Router>
      <IngredientsProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/order/pizza" component={Pizza} />
        <Route exact path="/order/calzone" component={Calzone} />
        <Route exact path="/ingredients" component={Ingredients} />
        <Route component={NotFoundPage}/>
       </Switch>
      </IngredientsProvider>
    </Router>
  );
}

export default App;
