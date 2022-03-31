import React from "react";
import { Link } from "react-scroll";
import "./Footer.scss";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#navbar" className="footer-logo">
            <img src={Logo} alt="logo" />
          </a>
          <h1>Tennis Shonan</h1>
        </div>

        <div className="footer-link-box">
          <ul className="footer-list">
            <li>
              <h3 className="h5 footer-item-title">Company</h3>
            </li>
            <li>
              <Link
                to="about"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="features"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="videoGallery"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Videos
              </Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <h3 className="h5 footer-item-title">Products</h3>
            </li>
            <li>
              <Link
                to="navbar"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="navbar"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <h3 className="h5 footer-item-title">Resources</h3>
            </li>
            <li>
              <Link
                to="navbar"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                FAQ’S
              </Link>
            </li>
            <li>
              <Link
                to="navbar"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                to="navbar"
                className="footer-link"
                smooth="true"
                duration={1000}
              >
                Terms&Cond.
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">
        &copy; Copyrights 2022 TennisShonan || All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
