import React from "react";

import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo"></div>

      <div className="nav">
        <div className="login">
          <Link to="/login">LogIn</Link>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
