import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    color: "#FAD493",
    paddingLeft: "20px",
    paddingTop: "10px",

    borderBottom: "1px solid #FAD493",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <Link underline="none" href="/">
        <h1 className={classes.root}>Hello World</h1>
      </Link>
    </header>
  );
};

export default Header;
