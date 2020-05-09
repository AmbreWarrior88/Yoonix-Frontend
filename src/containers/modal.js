import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";

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
  },
}));

const ConnexionModal = (props) => {
  const classes = useStyles();

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
          <form className={classes.root}>
            <ThemeProvider theme={theme}>
              <TextField label="Identifiant" />
              <TextField label="Mot de passe" />
            </ThemeProvider>
          </form>
          <Link underline="none" href="/privet">
            <Button className={classes.button}>Valider</Button>
          </Link>
        </div>
      </Fade>
    </Modal>
  );
};

export default ConnexionModal;
