import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./containers/HomePage";
import SignUp from "./containers/SignUp";
import PrivetPage from "./containers/PrivetPage";

function App() {
  return (
    <Container fixed>
      <Typography
        component="div"
        style={{ backgroundColor: "#121E23", height: "100vh" }}
      >
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/registration">
              <SignUp />
            </Route>
            <Route path="/privet">
              <PrivetPage />
            </Route>
          </Switch>
        </Router>
      </Typography>
    </Container>
  );
}

export default App;
