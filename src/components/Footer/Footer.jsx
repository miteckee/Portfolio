import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import hackerrankLogo from "../../assets/hackerrank.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="" alt="" />
          <p>
            I’m a full-stack developer and final-year IT student from India,
            passionate about building web apps with React and Node.js
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/ratnesh-mandal-158092320/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="LinkedIn" className="footer-icon" />
        </a>
        <a
          href="https://www.hackerrank.com/mickymx5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={hackerrankLogo}
            alt="HackerRank"
            className="footer-icon"
            id="hackrank-icon"
          />
        </a>
      </div>

      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Ratnesh Kumar Mandal. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
