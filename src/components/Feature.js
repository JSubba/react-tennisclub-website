import React from "react";
import "./Feature.scss";
import { RiStackFill, RiDiscussFill, RiDragMoveFill } from "react-icons/ri";

const Feature = () => {
  return (
    <div id="features" className="features">
      <div className="container">
        <div className="feature-row">
          <div className="feature-col">
            <RiStackFill className="icons" />
            <h2>Learn Anywhere</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              facilis ullam saepe quidem! Alias possimus nisi saepe officia
              perferendis veritatis. Commodi harum aperiam numquam molestias!
            </p>
          </div>
          <div className="feature-col">
            <RiDiscussFill className="icons" />
            <h2>Expert Instructors</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              facilis ullam saepe quidem! Alias possimus nisi saepe officia
              perferendis veritatis. Commodi harum aperiam numquam molestias!
            </p>
          </div>
          <div className="feature-col">
            <RiDragMoveFill className="icons" />
            <h2>Unlimited Access</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              facilis ullam saepe quidem! Alias possimus nisi saepe officia
              perferendis veritatis. Commodi harum aperiam numquam molestias!
            </p>
          </div>
        </div>
        <button className="button">
          <a href="#contact">Start Free Trial</a>
        </button>
      </div>
    </div>
  );
};

export default Feature;
