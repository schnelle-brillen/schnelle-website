import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="sb-de-footer">
    <div className="sb-de-footer-content">
      <div className="sb-de-footer-pages">
        <h2>Seiten</h2>
        <a href="/shop">Shop</a>
        <a href="/basket">Warenkorb</a>
        <a href="/">Index</a>
      </div>
      <div className="sb-de-footer-legal">
        <h2>Legales</h2>
        <a href="/imprint">Impressum</a>
      </div>
    </div>
    <div className="sb-de-footer-disclaimer">
      Made with &nbsp;
      <span role="img" aria-label="smiling emoji with fast glasses">
        😎
      </span>
      &nbsp; in Berlin.
    </div>
  </div>
);

export default Footer;
