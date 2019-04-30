import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="nav">
    <div className="nav__container">
      <div className="nav__right">
        <ul className="nav__item-wrapper">
          <li className="nav__item">
            <Link className="nav__link" to="/">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
