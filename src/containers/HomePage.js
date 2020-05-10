import React, { useState } from "react";
import Link from "@material-ui/core/Link";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import ConnexionModal from "../components/Modal";

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

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleOpen}
      >
        Connexion
      </Button>
      <Link underline="none" href="/registration">
        <Button className={classes.button} variant="contained">
          Inscription
        </Button>
      </Link>

      <ConnexionModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default HomePage;
