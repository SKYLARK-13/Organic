import React from "react";
import Carousel from "react-elastic-carousel";
import girl from "../../assets/girl.png";
import boy from "../../assets/boy.png";
import monkey from "../../assets/monkey.png";
import bond from "../../assets/bond.png";
import Card from "./Card";
import leaf from "../../assets/Group134.png";
import "./Test.css";
function Test() {
  return (
    <div className="test">
      <div className="test-cor">
        <Carousel showArrows={false}>
          <Card
            profile={girl}
            name="Jane Doe"
            article="Thank you for all the amazing produce and products you deliver each week…
you make my life so easy an bring goodness into our family eating. 
I’ve been roasting a lot of brussel sprouts and"
          />
          <Card
            profile={monkey}
            name="Martin Luther"
            article="Thank you for all the amazing produce and products you deliver each week…
you make my life so easy an bring goodness into our family eating. 
I’ve been roasting a lot of brussel sprouts and"
          />
          <Card
            profile={boy}
            name="Russel Pine"
            article="Thank you for all the amazing produce and products you deliver each week…
you make my life so easy an bring goodness into our family eating. 
I’ve been roasting a lot of brussel sprouts and"
          />
          <Card
            profile={bond}
            name="James Bond"
            article="Thank you for all the amazing produce and products you deliver each week…
you make my life so easy an bring goodness into our family eating. 
I’ve been roasting a lot of brussel sprouts and"
          />
        </Carousel>
      </div>
      <img src={leaf} alt="" />
      <div className="test-letter">
        <div className="letter-top">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="letter-bottom">
          <input type="text" placeholder="Enter your email address" />
          <div className="sub-button">
            <h6>Subscribe</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
