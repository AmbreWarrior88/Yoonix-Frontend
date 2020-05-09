import React from "react";
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
}));

const RegistrationPage = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "100px" }}>
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
      >
        <ThemeProvider theme={theme}>
          <TextField id="standard-basic" label="Nom" />
          <TextField id="standard-basic" label="Prénom" />
          <TextField id="standard-basic" label="Email" />
          <TextField id="standard-basic" label="Mot de passe" />
          <TextField id="standard-basic" label="Confirmation du mot de passe" />
        </ThemeProvider>
        <Button className={classes.button} variant="contained">
          Valider
        </Button>
      </form>
    </div>
  );
};

export default RegistrationPage;
