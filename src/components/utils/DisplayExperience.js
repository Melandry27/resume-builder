import React from "react";
import Label from "./Label";

const DisplayExperience = ({ statePosition, stateCompany, stateCity, stateFrom, stateTo }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "10px 0 0 15px" }}>
      <div style={style.container.fromContainer}>
        <Label value={stateFrom + " -"} style={style.from} />
        <Label value={stateTo} style={style.to} />
      </div>
      <div style={style.container.positionContainer}>
        <div>
          <Label value={statePosition} style={style.positions} />
        </div>
        <div>
          <Label value={stateCompany + ", "} style={style.company} />
          <Label value={stateCity} style={style.city} />
        </div>
      </div>
    </div>
  );
};

export default DisplayExperience;

const style = {
  container: {
    fromContainer: {
      display: "flex",
      flexDirection: "column",
      height: "auto",
      width: "auto",
      maxWidth: "100px",
    },
    positionContainer: {
      display: "flex",
      flexDirection: "column",
      width: "250px",
      marginLeft: "10px",
    },
  },

  positions: {
    fontSize: "18px",
    color: "#4d4d4d",
    fontWeight: "700",
  },
  company: { fontSize: "18px", color: "#4d4d4d" },
  city: { fontSize: "18px", color: "#4d4d4d" },
  from: { fontSize: "18px", color: "#4d4d4d", fontWeight: "700" },
  to: { fontSize: "18px", color: "#4d4d4d", fontWeight: "700" },
};
