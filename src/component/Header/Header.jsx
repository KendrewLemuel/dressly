import React from "react";

import { useState } from "react";

import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import icons from "../../assets/Icons.svg";
import icons1 from "../../assets/Icons1.svg";
import icons2 from "../../assets/Icons2.svg";
import icons3 from "../../assets/Icons3.svg";

const Header = () => {
  const [click, setAction] = useState(false);
  const actionClick = () => setAction(!click);

  return (
    <>
      <div className="header-head">
        <div className="resp-btn" onClick={actionClick}>
          {click ? <p>X</p> : <img src={icons3} alt="" />}
        </div>
        <div className="header-container">
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className={click ? "header-menu active" : "header-menu"}>
            <li>
              <Link>Shop</Link>
            </li>
            <li>
              <Link>New Arivals</Link>
            </li>
            <li>
              <Link>Sale</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="icon">
          <img src={icons} alt="" sizes={24} />
          <img src={icons1} alt="" sizes={24} />
          <img src={icons2} alt="" sizes={24} />
        </div>
      </div>
    </>
  );
};

export default Header;
