import React from "react";
import "./Sub.css";
import send from "../../assets/send.svg";

const Sub = () => {
  return (
    <>
      <div className="sub-wrapper">
        <div className="content">
          <div className="title">
            <h1>Subscribe Our NewsLetter</h1>
          </div>

          <div className="email-box">
            <div className="email">
              <form action="">
                <input
                  type="text"
                  name="name"
                  placeholder="Type your email here"
                  required
                />
              </form>
            </div>
            <div className="btn">
              <img src={send} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub;
