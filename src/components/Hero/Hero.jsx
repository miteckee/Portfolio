import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="Hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Hi, I'm Ratnesh</span>
      </h1>
      <p>
        I’m a passionate full-stack developer skilled in React and Node.js with
        a strong foundation in Python, C.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a
          className="hero-resume"
          href="/Ratnesh_Resume.pdf"
          download="Ratnesh_Resume.pdf"
          target="_blank"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
