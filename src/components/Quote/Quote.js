import React from "react";

import "./Quote.css";

const Quote = ({ img, quote, className }) => (
  <div className={`sb-de-quote ${className ? className : ''}`}>
    <div className="sb-de-quote-text">
      <p>{quote}</p>
    </div>
    <div
      className="sb-de-quote-image-wrapper"
      style={{ backgroundImage: `url(${img.src}` }}
    />
  </div>
);

export default Quote;
