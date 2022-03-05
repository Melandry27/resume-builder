import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button className="AddButton" onClick={onClick}>
      {text}
    </button>
  );
};

export { Button };
