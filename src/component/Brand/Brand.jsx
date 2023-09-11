import React from "react";
import "./Brand.css";
import comunity1 from "../../assets/comunity1.svg";
import comunity2 from "../../assets/comunity2.svg";
import comunity3 from "../../assets/comunity3.svg";
import comunity4 from "../../assets/comunity4.svg";
import comunity5 from "../../assets/comunity5.svg";
import comunity6 from "../../assets/comunity6.svg";

const Brand = () => {
  return (
    <div className="brand-wrapper">
      <div className="brand-container">
        <img src={comunity1} alt="" />
        <img src={comunity2} alt="" />
        <img src={comunity3} alt="" />
        <img src={comunity4} alt="" />
        <img src={comunity5} alt="" />
        <img src={comunity6} alt="" />
      </div>
    </div>
  );
};

export default Brand;
