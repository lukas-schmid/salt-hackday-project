import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="navbar__home">
        <Link to="/">
          <HomeIcon className="navbar__home--icon" />
        </Link>
      </div>
      <div className="navbar__header">
        <img className="navbar__header--logo" src={logo} alt="logo" />
        <h1 className="navbar__header--name">Food-App</h1>
      </div>
      <div className="navbar__theme">theme</div>
    </nav>
  );
};

export default Navbar;
