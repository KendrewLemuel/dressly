import React from "react";
import "./Order.css";
import c1 from "../../assets/c1.svg";
import c2 from "../../assets/c2.svg";
import c3 from "../../assets/c3.svg";
import c4 from "../../assets/c4.svg";

const Order = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-bg">
          <div className="title">
            <h1>The Easy Way to Order</h1>
          </div>

          <div className="content-detail">
            <div className="content-img">
              <img src={c1} alt="" />
              <div className="content-txt">
                <p>Select items</p>
              </div>
            </div>

            <div className="content-img">
              <img src={c2} alt="" />
              <div className="content-txt">
                <p>Login/Register</p>
              </div>
            </div>

            <div className="content-img">
              <img src={c3} alt="" />
              <div className="content-txt">
                <p>Shopping bag</p>
              </div>
            </div>

            <div className="content-img">
              <img src={c4} alt="" />
              <div className="content-txt">
                <p>Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
