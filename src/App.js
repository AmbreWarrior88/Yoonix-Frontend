import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import "./App.css";

import Header from "./components/header";
import HomePage from "./components/homePage";
import RegistrationPage from "./components/registrationPage";
import PrivetPage from "./components/privetPage";

function App() {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Typography
            component="div"
            style={{ backgroundColor: "#121E23", height: "100vh" }}
          >
            <Header />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/registration">
                <RegistrationPage />
              </Route>
              <Route path="/privet">
                <PrivetPage />
              </Route>
            </Switch>
          </Typography>
        </Container>
      </React.Fragment>
    </Router>
  );
}

export default App;
