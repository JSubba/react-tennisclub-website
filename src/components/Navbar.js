import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
import Logo from "../assets/logo.png";
// import Toggle from "../assets/toggle-button.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="navbar" className="navbar">
      <img src={Logo} alt="logo image" className="logo image" />
      <div className="container">
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
            <a href="#about">Read More</a>
          </button>
        </div>
      </div>

      <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="#header" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#features" smooth={true} duration={1000}>
            Features
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#plans" smooth={true} duration={1000}>
            Plans
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#coaches" smooth={true} duration={1000}>
            Coaches
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
      {/* <img
        src={Toggle}
        alt="toggle button"
        className="toggle-button"
        onClick={handleClick}
      /> */}
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
