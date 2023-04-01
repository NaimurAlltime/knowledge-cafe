import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <h2 className="header-logo">Knowledge Cafe</h2>
        <div className="menu">
          <a href="">
            <img
              className="nav-profile"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.209329912.1680195530&semt=sph"
              alt=""
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
