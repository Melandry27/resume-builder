import React from "react";
import Label from "./Label";

const DisplayInformationTop = ({
  styleTopTitle,
  styleContainerTop,
  styleFirstName,
  styleName,
  styleTitle,
  stateFirstName,
  stateName,
  stateTitle,
}) => {
  return (
    <div>
      <div className="topInfo" style={styleContainerTop}>
        <Label style={styleFirstName} value={stateFirstName} />
        <Label style={styleName} value={stateName} />
        <div style={styleTopTitle}>
          <Label style={styleTitle} value={stateTitle} />
        </div>
      </div>
    </div>
  );
};

export default DisplayInformationTop;
