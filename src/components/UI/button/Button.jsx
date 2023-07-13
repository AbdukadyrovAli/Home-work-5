import React from "react";

export const Button = ({ children, bgColor, onClick }) => {
  return (
    <div>
      <button style={{ backgroundColor: `${bgColor}` }} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
