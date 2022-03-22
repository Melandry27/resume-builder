import React from "react";

const Button = ({ onClick, text, style }) => {
  return (
    <button className="AddButton" onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export { Button };
