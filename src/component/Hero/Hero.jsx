import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import hero from "../../assets/hero-img.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>
          Discover the Latest <br />
          Fashion Trends
        </h1>
        <p>
          From stylish dresses to trendy tops and must-have accessories, we have
          everything you need to stay on top of the latest fashion trends. Our
          expertly curated collection features the hottest styles from top
          designers, so you can always find the perfect look for any occasion.
          Shop now and discover your new favorite fashion pieces.
        </p>
        <Link className="btn"> Shop Now</Link>
      </div>
      <div className="hero-right">
        <div className="img-container">
          <img className="hero-img" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
