import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <h2 className="header-logo">Knowledge Cafe</h2>
        <div className="menu">
          <a href="/order">News</a>
          <a href="/order_review">Blog</a>
          <a href="manage_inventory">About</a>
          <a href="/login">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
