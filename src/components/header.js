import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    color: "#FAD493",
    paddingLeft: "20px",
    paddingBottom: "10px",

    borderBottom: "1px solid #FAD493",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Link underline="none" href="/">
      <h1 className={classes.root}>Hello World</h1>
    </Link>
  );
};

export default Header;
