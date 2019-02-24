import React from "react";

function Input(props) {
  return (
    <input
      className="Input"
      type="text"
      placeholder={props.label}
      onChange={e => props.setValue(e.target.value)}
    />
  );
}

export default Input;
