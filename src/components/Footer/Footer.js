import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <div className="sb-de-footer">
    <div className="sb-de-footer-content">
      <div className="sb-de-footer-pages">
        <h2>Seiten</h2>
        <Link to="/shop">Shop</Link>
        <Link to="/basket">Warenkorb</Link>
        <Link to="/">Index</Link>
      </div>
      <div className="sb-de-footer-legal">
        <h2>Legales</h2>
        <Link to="/imprint">Impressum</Link>
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
