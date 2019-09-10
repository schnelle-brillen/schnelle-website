import React from "react";
import "./Navbar.css";

export default ({ children }) => {
  return (
    <div className="sb-de-navbar-wrapper">
      <div className="sb-de-navbar">
        <div
          className="sb-de-navbar-logo"
          onClick={() => (document.location.href = "/")}
        >
          <img
            src="/static/android-chrome-192x192.png"
            alt="A fast S followed by a faster B"
          />
        </div>
        <div className="sb-de-navbar-elements">{children}</div>
      </div>
    </div>
  );
};
