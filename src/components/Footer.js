import React from "react";

const Footer = () => {
  return (
    <div style={{}}>
      <div className="footer" style={style.div}>
        <h1 style={style.title}>
          Copyright © 2022 Melandry <a href="https://github.com/Melandry27">GitHub</a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;

const style = {
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C8C8C8",
    borderTop: "2px groove #C0C0C0",
    height: "75px",
    width: "100%",
  },
  title: {
    fontSize: "26px",
    color: "#A8D8EA",
    textShadow: "1px 1px 2px #000000",
  },
};
