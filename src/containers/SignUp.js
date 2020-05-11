import React, { useState } from "react";
import axios from "axios";

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

const RegistrationPage = () => {
  const classes = useStyles();

  const history = useHistory();

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [notSamePassword, setNotSamePassword] = useState(false);

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
            const response = await axios.post(
              "http://localhost/4000/user/create",
              {
                lastname: lastName,
                firstname: firstName,
                email: email,
                password: password,
              }
            );
            if (
              lastName !== "" &&
              firstName !== "" &&
              email !== "" &&
              password !== "" &&
              passwordConfirm !== "" &&
              password === passwordConfirm
            ) {
              history.push("/privet");
            } else {
              alert("Tous les champs ne sont pas remplis");
            }
          } catch (error) {
            alert("Une erreur s'est produite");
          }
        }}
      >
        <ThemeProvider theme={theme}>
          <TextField
            label="Nom"
            type="text"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <TextField
            label="Prénom"
            type="text"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <TextField
            label="Confirmation du mot de passe"
            type="password"
            value={passwordConfirm}
            onChange={(event) => {
              setPasswordConfirm(event.target.value);
            }}
          />
        </ThemeProvider>

        <Button className={classes.button} variant="contained" type="submit">
          Valider
        </Button>
      </form>
    </div>
  );
};

export default RegistrationPage;
