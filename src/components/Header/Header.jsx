import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav className="nav-container">
        <ul className="rotess">
          <h1 className="logo">REACT</h1>
          <li>Welcome</li>
          <li>Log in</li>
          <li>sign UP</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
