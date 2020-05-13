import React from "react";

const MemberCard = (props) => {
  return (
    <div
      style={{
        border: "4px solid #FAD493",
        color: "white",
        margin: "20px",
        display: "flex",
      }}
    >
      <img
        src={props.picture.thumbnail}
        alt=""
        style={{ flex: "1", padding: "10px" }}
      />
      <div style={{ flex: "2" }}>
        <p>
          {props.name.title} {props.name.last} {props.name.first},{" "}
          {props.dob.age} ans
        </p>

        <p>
          Nous vient de {props.location.city} en {props.location.state}
        </p>
        <p>Inscrit depuis : {props.registered.age} ans</p>
      </div>
    </div>
  );
};

export default MemberCard;
