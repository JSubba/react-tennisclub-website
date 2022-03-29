import React from "react";
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
    <section id="contact" className="contact">
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
                <a href="#header">Start Free Trial</a>
              </button>
              <p>
                <a href="https://www.facebook.com" target="_blank">
                  {FaFacebookF}
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  {FaTwitter}
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  {FaInstagramSquare}
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  {FaLinkedinIn}
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="right-col">
          <img src={ContactImage} alt="contact image" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
