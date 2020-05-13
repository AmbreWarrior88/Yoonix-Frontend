import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookie from "js-cookie";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./containers/HomePage";
import SignUp from "./containers/SignUp";
import PrivatePage from "./containers/PrivatePage";

function App() {
  // State pour stocker le token
  const [token, setToken] = useState(Cookie.get("token"));

  return (
    <Container fixed>
      <Typography
        component="div"
        style={{
          backgroundColor: "#121E23",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Router>
          <Header setToken={setToken} token={token} />
          <Switch>
            <Route exact path="/">
              <HomePage setToken={setToken} />
            </Route>
            <Route path="/registration">
              <SignUp setToken={setToken} />
            </Route>
            <Route path="/private">
              <PrivatePage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Typography>
    </Container>
  );
}

export default App;
