import React from "react";
import { Link } from "react-scroll";
import "./About.scss";
import AboutImage from "../assets/about.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container about-row">
        <div className="left-col">
          <img src={AboutImage} alt="about" />
        </div>
        <div className="right-col">
          <div className="about-text">
            <h1>Tennis Shonan</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              ipsa maxime earum autem sint ipsam reprehenderit praesentium
              deserunt voluptas ratione tempora dolore, delectus iste cumque
              ducimus veritatis atque deserunt voluptas ratione tempora dolore,
              delectus iste cumque ducimus veritatis atque.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              ipsa maxime earum autem sint ipsam.
            </p>
            <button className="button">
              <Link to="navbar" smooth="true" duration={1000}>
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
