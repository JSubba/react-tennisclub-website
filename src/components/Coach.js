import React from "react";
import "./Coach.scss";
import Coach1 from "../assets/coach1.png";
import Coach2 from "../assets/coach2.png";
import Coach3 from "../assets/coach3.png";

const Coach = () => {
  return (
    <div id="coaches" className="coaches">
      <div className="container">
        <h1>Meet Our Coaches</h1>
        <div className="coach-row">
          <div className="coach-col">
            <img src={Coach1} alt="coach" />
            <h2>Beverly Hanson</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              facilis ullam saepe quidem! Alias possimus nisi saepe officia
              perferendis veritatis. Commodi harum aperiam numquam molestias!
            </p>
          </div>
          <div className="coach-col">
            <img src={Coach2} alt="coach" />
            <h2>Taro Mitsubishi</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              facilis ullam saepe quidem! Alias possimus nisi saepe officia
              perferendis veritatis. Commodi harum aperiam numquam molestias!
            </p>
          </div>
          <div className="coach-col">
            <img src={Coach3} alt="coach" />
            <h2>John Bowen</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              facilis ullam saepe quidem! Alias possimus nisi saepe officia
              perferendis veritatis. Commodi harum aperiam numquam molestias!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coach;
