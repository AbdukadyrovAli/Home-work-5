import React from "react";

export const Input = ({ id, label, type, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};
