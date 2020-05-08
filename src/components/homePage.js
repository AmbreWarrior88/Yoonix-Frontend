import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import ConnexionModal from "../containers/modal";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Connexion
      </Button>
      <Link to="/registration">
        <Button variant="contained">Inscription</Button>
      </Link>

      <ConnexionModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default HomePage;
