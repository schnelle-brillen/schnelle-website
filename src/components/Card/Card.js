import React from "react";

import './Card.css';

export default ({ className, style, children }) => {
  return (
    <div className={`sb-de-card ${className}`} style={style}>
      {children}
    </div>
  );
};
