import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import btn1 from "../../assets/btn-app.svg";
import btn2 from "../../assets/btn-play.svg";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={logo} alt="" />
            <p>
              We are an online fashion store that provides a variety of the
              latest and trendy fashion products for men and women. We always
              try to provide our customers with a pleasant and easy shopping
              experience.
            </p>
          </div>

          <div className="col">
            <h4>Product Category</h4>
            <ul>
              <li>Women's clothing</li>
              <li>Menswear</li>
              <li>Accessories</li>
              <li>Shoes</li>
            </ul>
          </div>

          <div className="col">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div className="col">
            <h4>Download Our App</h4>
            <ul>
              <li>
                <a href="/">
                  <img src={btn1} alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={btn2} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
