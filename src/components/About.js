import React from "react";
import "./About.scss";
import AboutImage from "../assets/about.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container about-row">
        <div className="left-col">
          <img src={AboutImage} alt="about image" />
        </div>
        <div className="right-col">
          <div className="about-text">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              ipsa maxime earum autem sint ipsam reprehenderit praesentium
              deserunt voluptas ratione tempora dolore, delectus iste cumque
              ducimus veritatis atque et porro.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              ipsa maxime earum autem sint ipsam reprehenderit praesentium
              deserunt voluptas ratione tempora dolore, delectus iste cumque.
            </p>
            <button className="button">
              <a href="#header">Learn More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
