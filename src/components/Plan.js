import React from "react";
import { Link } from "react-scroll";
import "./Plan.scss";
import PlanImage from "../assets/plan.png";

const Plan = () => {
  return (
    <div id="plans" className="plans">
      <div className="container plan-row">
        <div className="left-col">
          <div className="plan-text">
            <h1>
              Browse Our Tennis <br />
              PLANS
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ipsum
              recusandae labore voluptatum! Odio at assumenda beatae dicta magni
              saepe suscipit amet dolorem perspiciatis reiciendis. consectetur
              adipisicing elit. A ipsum recusandae labore voluptatum! Odio at
              consectetur adipisicing elit assumenda beatae dicta magni saepe
              suscipit amet dolorem perspiciatis!
            </p>
            <p>
              Odio at consectetur adipisicing elit assumenda beatae dicta magni
              saepe suscipit amet dolorem perspiciatis!
            </p>
          </div>
          <button className="button">
            <Link to="navbar" smooth={true} duration={1000}>
              Find Out More
            </Link>
          </button>
        </div>
        <div className="right-col">
          <img src={PlanImage} alt="plans" />
        </div>
      </div>
    </div>
  );
};

export default Plan;
