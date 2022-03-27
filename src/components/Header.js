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
    height: "100px",
    width: "100%",
    fontSize: "32px",
    backgroundColor: "#C8C8C8",
    borderBottom: "2px groove #C0C0C0",
  },
  title: {
    color: "#A8D8EA",
    textShadow: "4px 3px 0 #7A7A7A, 1px 1px 2px rgba(0,0,0,0)",
  },
};
