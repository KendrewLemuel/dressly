import React from "react";
import "./Top.css";
import top1 from "../../assets/top1.svg";
import top2 from "../../assets/top2.svg";
import top3 from "../../assets/top3.svg";

const Top = () => {
  return (
    <div className="selection-wrapper">
      <div className="selection-title">
        <h1>Top Selection</h1>
      </div>
      <div className="content-container">
        <div className="img-selection">
          <img src={top1} alt="" />
          <img src={top2} alt="" />
          <img src={top3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Top;
