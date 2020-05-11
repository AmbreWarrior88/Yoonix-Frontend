import React from "react";

const MemberCard = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <p>{props.name.title}</p>
      <p>{props.name.last}</p>
      <p>{props.name.first}</p>
      {/* <p>{props.location.street}</p> */}
    </div>
  );
};

export default MemberCard;
