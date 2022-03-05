import React from "react";
import Inputs from "./Inputs";
import Label from "./Label";

const ExperienceForm = ({ styleTitle, statePosition, stateCompany, stateCity, stateFrom, stateTo }) => {
  return (
    <div>
      <div style={styleTitle}>
        <Label value={"Experience"} />
      </div>
      <Inputs placeHolder={"Position"} change={statePosition} />
      <Inputs placeHolder={"Company"} change={stateCompany} />
      <Inputs placeHolder={"City"} change={stateCity} />
      <Inputs placeHolder={"From"} change={stateFrom} />
      <Inputs placeHolder={"To"} change={stateTo} />
    </div>
  );
};

export default ExperienceForm;
