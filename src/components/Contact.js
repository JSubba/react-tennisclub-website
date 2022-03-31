import React from "react";
import { Link } from "react-scroll";
import "./Contact.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import ContactImage from "../assets/contact.png";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container contact-row">
        <div className="left-col">
          <h1>
            Sign Up for our
            <br />
            FREE TRIAL
          </h1>
          <form>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <div className="btn-box">
              <button className="button">
                <Link to="navbar" smooth="true" duration={1000}>
                  Start Free Trial
                </Link>
              </button>
              <p>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="right-col">
          <img src={ContactImage} alt="contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
