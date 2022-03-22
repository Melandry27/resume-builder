import React from "react";
import Label from "./Label";

const DisplayEducation = ({ stateUniversity, stateCity, stateDegree, stateSubject, stateFrom, stateTo }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "10px 0 0 15px" }}>
      <div style={style.container.fromContainer}>
        <Label value={stateFrom + " -"} style={style.university} />
        <Label value={stateTo} style={style.university} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Label value={stateUniversity + ", "} style={style.university} />
          <Label value={stateCity} style={style.university2} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label value={stateDegree} style={style.rest} />
          <Label value={stateSubject} style={style.rest} />
        </div>
      </div>
    </div>
  );
};

export default DisplayEducation;

const style = {
  container: {
    fromContainer: {
      display: "flex",
      flexDirection: "column",
      height: "auto",
      width: "auto",
      maxWidth: "100px",
    },
  },
  university: {
    fontSize: "18px",
    color: "#4d4d4d",
    fontWeight: "700",
  },
  university2: {
    fontSize: "18px",
    color: "#4d4d4d",
    fontWeight: "700",
    marginLeft: "5px",
  },
  rest: { fontSize: "18px", color: "#4d4d4d" },
};
