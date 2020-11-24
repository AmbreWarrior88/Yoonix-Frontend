import React, { useState } from "react";
import axios from "axios";

import Cookies from "js-cookie";

import { useHistory } from "react-router-dom";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#121E23",
    border: "4px solid #FAD493",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    marginTop: "40px",
    background: "#39505D",
    color: "white",
    fontWeight: "bold",
  },
  title: {
    color: "#FAD493",
    paddingLeft: "10px",
  },
}));

const ConnexionModal = (props) => {
  const classes = useStyles();

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          <h2 className={classes.title}>Connexion</h2>
          <form
            className={classes.root}
            onSubmit={async (event) => {
              event.preventDefault();
              try {
                const response = await axios.post(
                  `${process.env.REACT_APP_NODE_ENV === "dev" ? "http://localhost:4000" : "https://yoonix.herokuapp.com"}/user/sign_in`,
                  { email, password }
                );
                console.log(response);
                if (!response.error) {
                  // Stocker le token dans les cookies
                  Cookies.set("token", response.data.token);
                  // Met à jour le state token dans app.js
                  props.setToken(response.data);
                  history.push("/private");
                }
              } catch (error) {
                alert("Mauvais nom ou mot de passe");
              }
            }}
          >
            <ThemeProvider theme={theme}>
              {/* ---------Input Email-------- */}
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              {/* ---------Input Password--------- */}
              <TextField
                label="Mot de passe"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </ThemeProvider>
            <br />
            {/* ---------Valide le formulaire-------- */}
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
            >
              Valider
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default ConnexionModal;
