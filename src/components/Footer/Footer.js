import React from "react";
import "./Footer.css";
import brand from "../../assets/Group225.png";
import fb from "../../assets/Group99.png";
import li from "../../assets/Group100.png";
import tw from "../../assets/Group101.png";
import insta from "../../assets/Group105.png";
function Footer() {
  return (
    <div className="footer">
      <div className="branding">
        <img src={brand} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="line"></div>
        <h6>© Copyright 2020 Nature</h6>
      </div>
      <div className="about">
        <h3>Information</h3>
        <div className="line"></div>
        <h4>About Us</h4>
        <h4>Products</h4>
        <h4>Contact Us</h4>
        <h4>Terms of Service</h4>
      </div>
      <div className="company">
        <h4>About Us</h4>
        <h4>Products</h4>
      </div>
      <div className="follow">
        <h3>Follow Us</h3>
        <div className="line"></div>
        <div className="icons">
          <img src={fb} alt="" />
          <img src={li} alt="" />
          <img src={fb} alt="" />
          <img src={insta} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
