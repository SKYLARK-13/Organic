import React from "react";
import "./Card.css";

import apos from "../../assets/Group86.png";
import star from "../../assets/star.png";
function Card({ profile, name, article }) {
  return (
    <div className="card">
      <img src={apos} className="apos" alt="" />
      <img src={profile} className="profile" alt="" />
      <h5>{name}</h5>
      <div className="stars">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <p>{article}</p>
    </div>
  );
}

export default Card;
