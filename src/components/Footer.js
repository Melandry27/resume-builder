import React from "react";

const Footer = () => {
  return (
    <div className="footer" style={style.div}>
      <h1 style={style.title}>
        Copyright © 2022 Melandry <a href="https://github.com/Melandry27">GitHub</a>
      </h1>
    </div>
  );
};

export default Footer;

const style = {
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BFFFF0",
    height: "75px",
    width: "100%",
    boxShadow:
      "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC",
  },
  title: {
    fontSize: "26px",
    color: "#F0FFC2",
    textShadow: "2px 2px 10px #6B6B6B",
  },
};
