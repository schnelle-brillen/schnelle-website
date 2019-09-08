import React from "react";

import "./Card.css";

export default ({ className, style, children }) => {
  return (
    <div className={`${className} sb-de-card `} style={style}>
      {children}
    </div>
  );
};
