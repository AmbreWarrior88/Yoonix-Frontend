import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header";
import HomePage from "./components/homePage";
import RegistrationPage from "./components/registrationPage";
import PrivetPage from "./components/privetPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <RegistrationPage path="/registration" />
        </Route>
        <Route>
          <PrivetPage path="/privet" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
