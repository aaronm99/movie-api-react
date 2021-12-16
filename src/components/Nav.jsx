import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <figure className="nav__logo">
          <img src="../assets/playlogo.png" alt="" className="nav__logo--img" />
        </figure>
      </Link>

      <ul className="nav__list">
        <li className="nav__list--link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__list--link unclickable">Discover</li>
        <li className="nav__list--link unclickable">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
