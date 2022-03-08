import React from "react";

const Inputs = ({ name, placeHolder, change }) => {
  return (
    <div style={style.container}>
      <input name={name} style={style.input} defaultValue={placeHolder} type="text" onChange={change} />
    </div>
  );
};

export default Inputs;

const style = {
  input: {
    margin: "20px 10px 10px 10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#f3f6f4",
    height: "35px",
    color: "black",
    fontSize: "20px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
};
