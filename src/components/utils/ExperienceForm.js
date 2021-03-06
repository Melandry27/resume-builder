import React from "react";
import Inputs from "./Inputs";
import Label from "./Label";

const EducationForm = ({
  index,
  styleTitle,
  valuePosition,
  statePosition,
  valueCompany,
  stateCompany,
  valueCity,
  stateCity,
  valueFrom,
  stateFrom,
  valueTo,
  stateTo,
}) => {
  return (
    <div>
      <div style={styleTitle}>
        <Label value={`Experience ${index + 1}`} />
      </div>
      <Inputs name={"position"} placeHolder={"Position"} value={valuePosition} change={statePosition} />
      <Inputs name={"company"} placeHolder={"Company"} value={valueCompany} change={stateCompany} />
      <Inputs name={"city"} placeHolder={"City"} value={valueCity} change={stateCity} />
      <Inputs name={"from"} placeHolder={"From"} value={valueFrom} change={stateFrom} />
      <Inputs name={"to"} placeHolder={"To"} value={valueTo} change={stateTo} />
    </div>
  );
};

export default EducationForm;
