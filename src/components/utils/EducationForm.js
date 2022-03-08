import React from "react";
import Inputs from "./Inputs";
import Label from "./Label";

const ExperienceForm = ({
  index,
  styleTitle,
  valueUniversity,
  stateUniversity,
  valueCity,
  stateCity,
  valueDegree,
  stateDegree,
  valueSubject,
  stateSubject,
  valueFrom,
  stateFrom,
  valueTo,
  stateTo,
}) => {
  return (
    <div>
      <div style={styleTitle}>
        <Label value={`Education ${index + 1}`} />
      </div>
      <Inputs name={"university"} placeHolder={"University name"} value={valueUniversity} change={stateUniversity} />
      <Inputs name={"city"} placeHolder={"City"} value={valueCity} change={stateCity} />
      <Inputs name={"degree"} placeHolder={"Degree"} value={valueDegree} change={stateDegree} />
      <Inputs name={"subject"} placeHolder={"Subject"} value={valueSubject} change={stateSubject} />
      <Inputs name={"from"} placeHolder={"From"} value={valueFrom} change={stateFrom} />
      <Inputs name={"to"} placeHolder={"To"} value={valueTo} change={stateTo} />
    </div>
  );
};

export default ExperienceForm;
