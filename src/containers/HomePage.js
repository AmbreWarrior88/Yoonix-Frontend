import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import ConnexionModal from "../components/Modal";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#39505D",
    color: "white",
    fontWeight: "bold",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
    justifyContent: "center",
  },
}));

const HomePage = (props) => {
  // State pour gérer ouverture/fermeture Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const history=useHistory()

  const classes = useStyles();

  return (
    <div>
      <h2
        style={{
          color: "#FAD493",
          display: "flex",
          justifyContent: "center",
          margin: "100px",
        }}
      >
        Bienvenue !
      </h2>
      <div className={classes.root}>
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleOpen}
        >
          Connexion
        </Button>
        <Link to="/registration">
            <p>Test</p>
        </Link>
          <Button className={classes.button} variant="contained" onClick={()=> history.push("/registration")}>
            Créer un compte
          </Button>
        

        <ConnexionModal
          open={open}
          handleClose={handleClose}
          setToken={props.setToken}
        />
      </div>
    </div>
  );
};

export default HomePage;
