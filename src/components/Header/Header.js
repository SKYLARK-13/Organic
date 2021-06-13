import React from "react";
import "./Header.css";
import logo from "../../assets/Group220.png";
import logob from "../../assets/Group228.png";
import flower from "../../assets/Group195.png";
function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="" />
          <h3>Organic</h3>
        </div>
        <div className="navbar-right">
          <h5>Home</h5>
          <h5>Products</h5>
          <h5>Blog</h5>
          <h5>About Us</h5>
          <h5>Contact Us</h5>
        </div>
      </div>
      <div className="body">
        <div className="body-content">
          <h2>Healthy life with</h2>
          <h1>Nature Organic</h1>
          <p>
            Vegetables are the edible parts of a plant
            <br /> that is used in cooking or can be eaten now.
          </p>
          <div className="body-button">
            <h6>Explore Now</h6>
          </div>
        </div>
        <div className="body-logo">
          <div className="flower">
            <img src={flower} alt="" />
          </div>
          <div className="logob">
            <img src={logob} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
