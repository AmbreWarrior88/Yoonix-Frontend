import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: "4px solid #FAD493",
    color: "white",
    margin: "20px 40px",
    display: "flex",
    alignItem: "center",
  },
  image: {
    height: "150px",
    width: "150px",
    padding: "15px",
  },
});

const MemberCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={props.picture.large} alt="" className={classes.image} />
      <div>
        <p>
          <span>Pseudo : </span>
          <span style={{ fontWeight: "bold" }}>{props.login.username}</span>
        </p>

        <p>
          {props.name.title} {props.name.last} {props.name.first},{" "}
          {props.dob.age} ans
        </p>
        <p>
          Vient de {props.location.city} en {props.location.state}
        </p>
        <p>Inscrit depuis : {props.registered.age} ans</p>
      </div>
    </div>
  );
};

export default MemberCard;
