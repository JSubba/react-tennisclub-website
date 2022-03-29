import React from "react";
import "./Footer.scss";
import { BiTennisBall } from "react-icons/bi";
import { FiArrowUpCircle } from "react-icons/fi";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="footer-links">
          <div className="link-title">
            <h4>Product</h4>
            <small>
              <a href="#"> Our Plan</a>
            </small>
            <br />
            <small>
              <a href="#">Free Trial</a>
            </small>
          </div>
          <div className="link-title">
            <h4>About Us</h4>
            <small>
              <a href="#">Request Demo</a>
            </small>
            <br />
            <small>
              <a href="#">Blogs</a>
            </small>
          </div>
          <div className="link-title">
            <h4>Support</h4>
            <small>
              <a href="#">Features</a>
            </small>
            <br />
            <small>
              <a href="#">FAQs</a>
            </small>
          </div>
          <div className="link-title">
            <h4>Explore</h4>
            <small>
              <a href="#">Find Non-profit</a>
            </small>
            <br />
            <small>
              <a href="#">Corporate Solution</a>
            </small>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-info">
        <div className="copyright-text">
          <span>
            <BiTennisBall />
          </span>
          <span>ShonanTennis &copy;copyright || 2022</span>
          <a href="#header">
            <FiArrowUpCircle />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
