import React from "react";
import { withRouter } from "react-router-dom";
import "./Navbar.css";

export default withRouter(({ children, history }) => {
  return (
    <div className="sb-de-navbar-wrapper">
      <div className="sb-de-navbar">
        <button className="sb-de-navbar-logo">
          <img
            src="/android-chrome-192x192.png"
            alt="A fast S followed by a faster B"
            onClick={() => history.push("/")}
          />
        </button>
        <div className="sb-de-navbar-elements">{children}</div>
      </div>
    </div>
  );
});
