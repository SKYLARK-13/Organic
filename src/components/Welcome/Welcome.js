import React from "react";
import "./Welcome.css";
import leaf from "../../assets/Group114.png";
import carda from "../../assets/Group205.png";
import cardb from "../../assets/Group207.png";
import cora from "../../assets/Group39.png";
import corb from "../../assets/Group55.png";
import corc from "../../assets/Group64.png";
import InfiniteCarousel from "react-leaf-carousel";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-top">
        <div className="top-desc">
          <img src={leaf} alt="" />
          <h2>Welcome to Nature</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="top-cards">
          <img src={cardb} alt="" />
          <img src={carda} alt="" />
          <img src={cardb} alt="" />
          <img src={cardb} alt="" />
        </div>
      </div>
      <div className="welcome-bottom">
        <div className="bottom-desc">
          <h2>Proudly presented by</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <div className="bottom-cor">
          
            <div className="cors">
              <img alt="" src={cora} />
            </div>
            <div className="cors">
              <img alt="" src={corc} />
            </div>
            <div className="cors">
              <img alt="" src={corb} />
            </div>
            <div className="cors">
              <img alt="" src={corc} />
            </div>
            <div className="cors">
              <img alt="" src={cora} />
            </div>
          
        </div>
        <div className="corousel">
            <div className="corousel-dot"></div>
            <div className="corousel-dot"></div>
            <div className="corousel-dot"></div>
            <div className="corousel-dot"></div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
