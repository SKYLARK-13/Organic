import React from "react";
import "./Blog.css";
import bloga from "../../assets/bloga.png";
import blogb from "../../assets/blogb.png";
import blogc from "../../assets/blogc.png";
import strp from "../../assets/Group114.png";
function Blog() {
  return (
    <div className="blog">
      <div className="blog-top">
        <img src={strp} alt="" />
        <h3>Read Our Blog</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="blog-bottom">
        <div className="blog_cards">
          <div className="blog_card">
            <img src={bloga} alt="" />
            <h4>Blog Post One</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <h6>Read More</h6>
          </div>
          <div className="blog_card">
            <img src={blogb} alt="" />
            <h4>Blog Post One</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <h6>Read More</h6>
          </div>
          <div className="blog_card">
            <img src={blogc} alt="" />
            <h4>Blog Post One</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <h6>Read More</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
