import React, { useState } from "react";
import axios from "axios";

import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FAD493",
    },
    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  title: {
    color: "#FAD493",
  },
  button: {
    marginTop: "40px",
    background: "#39505D",
    color: "white",
    fontWeight: "bold",
  },
  input: {
    display: "none",
  },
}));

const RegistrationPage = (props) => {
  const classes = useStyles();

  const history = useHistory();

  const [lastName, setLastName] = useState("a");
  const [firstName, setFirstName] = useState("a");
  const [email, setEmail] = useState("a@g.com");
  const [password, setPassword] = useState("a");
  const [passwordConfirm, setPasswordConfirm] = useState("a");

  return (
    <div style={{ margin: "50px" }}>
      <h2
        className={classes.title}
        style={{ display: "flex", justifyContent: "center" }}
      >
        Créer un compte
      </h2>
      <form
        className={classes.root}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            if (
              lastName !== "" &&
              firstName !== "" &&
              email !== "" &&
              password !== "" &&
              passwordConfirm !== "" &&
              password === passwordConfirm
            ) {
              const response = await axios.post(
                "http://localhost:4000/user/sign_up",
                {
                  lastname: lastName,
                  firstname: firstName,
                  email: email,
                  password: password,
                }
              );
              console.log(response.data);
              // Stocker le token dans les cookies
              Cookie.set("token", response.data.token);
              // Met à jour la statue du state token
              props.setToken(response.data);
              history.push("/private");
            } else {
              alert("Tous les champs ne sont pas remplis");
            }
          } catch (error) {
            alert("Une erreur s'est produite");
          }
        }}
      >
        <ThemeProvider theme={theme}>
          {/* ------Input Nom------ */}
          <TextField
            label="Nom"
            type="text"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          {/* -------Input Prénom------- */}
          <TextField
            label="Prénom"
            type="text"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          {/* --------Input Email-------- */}
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          {/* ---------Input Password-------- */}
          <TextField
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {/* --------Input Confirmation Password--------- */}
          {password !== passwordConfirm ? (
            <TextField
              error
              helperText="Mot de passe différent"
              label="Confirmation du mot de passe"
              type="password"
              value={passwordConfirm}
              onChange={(event) => {
                setPasswordConfirm(event.target.value);
              }}
            />
          ) : (
            <TextField
              label="Confirmation du mot de passe"
              type="password"
              value={passwordConfirm}
              onChange={(event) => {
                setPasswordConfirm(event.target.value);
              }}
            />
          )}
        </ThemeProvider>
        {/* ------Validation du formulaire-------- */}
        <Button className={classes.button} variant="contained" type="submit">
          Valider
        </Button>
      </form>
    </div>
  );
};

export default RegistrationPage;
