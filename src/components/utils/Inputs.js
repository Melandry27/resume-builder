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
    margin: "5px 10px 10px 5px",
    border: "2px solid #6E6E6E",
    borderRadius: "5px",
    backgroundColor: "#F5F5F5",
    height: "30px",
    color: "black",
    fontSize: "18px",
    fontWeight: "700",
    paddingLeft: "10px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
};
