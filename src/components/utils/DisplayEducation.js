import React from "react";
import Label from "./Label";

const DisplayEducation = ({ stateUniversity, stateCity, stateDegree, stateSubject, stateFrom, stateTo }) => {
  return (
    <div>
      <Label value={stateUniversity} />
      <Label value={stateCity} />
      <Label value={stateDegree} />
      <Label value={stateSubject} />
      <Label value={stateFrom} />
      <Label value={stateTo} />
    </div>
  );
};

export default DisplayEducation;
