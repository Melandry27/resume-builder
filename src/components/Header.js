import React from "react";

const Header = () => {
  return (
    <div className="header" style={styleHeader.div}>
      <h1 style={styleHeader.title}>Resume Creator</h1>
    </div>
  );
};

export default Header;

const styleHeader = {
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0",
    padding: "0",
    height: "auto",
    minHeight: "100px",
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderBottom: "2px groove #C0C0C0",
  },
  title: {
    color: "#A8D8EA",
    fontSize: "72px",
  },
};
