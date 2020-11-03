import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import PersonIcon from "@material-ui/icons/Person";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import HomeIcon from "@material-ui/icons/Home";

import Cookie from "js-cookie";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    borderBottom: "1px solid #FAD493",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: "#FAD493",
    paddingLeft: "40px",
  },
  icon: {
    color: "#FAD493",
    marginTop: "28px",
    marginRight: "40px",
    cursor: "pointer",
  },
});

const Header = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Link underline="none" href="/">
        <h1 className={classes.title}>Hello World</h1>
      </Link>
      <div>
        <Link underline="none" href="/">
          <HomeIcon className={classes.icon} fontSize="large" />
        </Link>
        {props.token ? (
          <PersonIcon
            className={classes.icon}
            fontSize="large"
            onClick={() => {
              props.setToken("");
              Cookie.remove("token");
              history.push("/");
            }}
          />
        ) : (
          <PermIdentityIcon className={classes.icon} fontSize="large" />
        )}
      </div>
    </div>
  );
};

export default Header;
