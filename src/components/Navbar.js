import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
import Logo from "../assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="navbar" className="navbar">
      <div className="container">
        <img src={Logo} alt="logo" className="logo" />

        <div className="header-text">
          <h1>
            Best Tennis
            <br />
            Club in Shonan.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            tempore, et sapiente consequuntur quo nobis consectetur, in vero
            possimus illo reprehenderit obcaecati qui maxime provident.
            Quibusdam incidunt vitae quasi dicta.
          </p>
          <button className="button">
            <Link to="about" smooth="true" duration={1000}>
              Read More
            </Link>
          </button>
        </div>
      </div>

      <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="navbar" smooth="true" duration={1000}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" smooth="true" duration={1000}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="features" smooth="true" duration={1000}>
            Features
          </Link>
        </li>
        <li className="nav-item">
          <Link to="videoGallery" smooth="true" duration={1000}>
            Videos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="coaches" smooth="true" duration={1000}>
            Coaches
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" smooth="true" duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="toggle-button" onClick={handleClick}>
        {showMenu ? (
          <FaTimes className="icons" />
        ) : (
          <FaBars className="icons" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
