import React from "react";
import "./Best.css";
import best1 from "../../assets/best1.png";
import best2 from "../../assets/best2.png";
import best3 from "../../assets/best3.png";
import best4 from "../../assets/best4.png";

const Best = () => {
  return (
    <>
      <div className="best-wrapper">
        <div className="topSec">
          <div className="title">
            <h1>BestSellers</h1>
          </div>
          <div className="btn">See all</div>
        </div>
        <div className="botSec">
          <img src={best1} alt="" />
          <img src={best2} alt="" />
          <img src={best3} alt="" />
          <img src={best4} alt="" />
        </div>
      </div>
    </>
  );
};

export default Best;
