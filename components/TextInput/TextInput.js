import React from "react";

import "./TextInput.css";

export default ({ label, placeholder, value, handleInputUpdate }) => (
  <div className="sb-de-text-input">
    <span>{label}</span>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={event => handleInputUpdate(event.target.value)}
      placeholder={label}
    />
  </div>
);
