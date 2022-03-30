import React from "react";
import { Link } from "react-scroll";
import "./Footer.scss";
import { BiTennisBall } from "react-icons/bi";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="footer-links">
          <div className="link-title">
            <h4>Product</h4>
            <small>
              <Link to="navbar" smooth={true} duration={1000}>
                Our Plan
              </Link>
            </small>
            <br />
            <small>
              <Link to="navbar" smooth={true} duration={1000}>
                Free Trial
              </Link>
            </small>
          </div>
          <div className="link-title">
            <h4>about Us</h4>
            <small>
              <Link to="navbar" smooth={true} duration={1000}>
                Request Demo
              </Link>
            </small>
            <br />
            <small>
              <Link to="navbar" smooth={true} duration={1000}>
                Blogs
              </Link>
            </small>
          </div>
          <div className="link-title">
            <h4>Support</h4>
            <small>
              <Link to="navbar" smooth={true} duration={1000}>
                Features
              </Link>
            </small>
            <br />
            <small>
              <Link to="navbar" smooth={true} duration={1000}>
                FaQs
              </Link>
            </small>
          </div>
          <div className="link-title">
            <h4>Explore</h4>
            <small>
              <Link to="navbar" smooth={true} duration={1000}>
                Find Non-profit
              </Link>
            </small>
            <br />
            <small>
              <Link to="navbar" smooth={true} duration={1000}>
                Corporate Solution
              </Link>
            </small>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-info">
        <div className="copyright-text">
          <sub>
            <BiTennisBall className="icon" />
          </sub>
          <span>ShonanTennis &copy;copyright || 2022</span>
          <Link to="navbar" smooth={true} duration={1000}>
            <FaArrowCircleUp className="arrow-up" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
