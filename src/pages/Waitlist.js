import React, { useState } from "react";
import "./../styles/Waitlist.css";
import IMAGE from "./../images/Homepage.png"

const Waitlist = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${email}`);
    console.log(`${email}`);
  };
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="logo-container">
            <div className="logo-wrapper">
              <h1 className="logo">Fraser</h1>
            </div>
          </div>
          <div className="waitlist-text">
            <h1 className="header-text">
              Move freely <br /> <span className="cities">between cities.</span>
            </h1>
            <p className="subtitle-text">
              {" "}
              Do you want to travel between cities comfortably, conveniently and
              affordably, use Fraser.
            </p>
          </div>
          <div class="Patterns-dots Landing-dots Patterns_animatedIn__2wrQM">
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <button className="Button">Get Early Access</button>
          {/* <form action="submit">
            <label htmlFor="Enter your email address">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <input type="submit" />
          </form> */}
          <div className="image-container">
            <div className="image-bg-left">
              <div className="image-bg">
                <img className="homepage" src={IMAGE} alt="" />
              </div>
            </div>
          </div>
          {/* <Form /> */}
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
