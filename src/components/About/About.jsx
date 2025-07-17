import React from "react";
import "./About.css";
import about_profile from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="About">
      <div className="about-tittle">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m Ratnesh Kumar Mandal, a final-year B.Tech student in
              Information Technology with a passion for coding and creating
              meaningful digital solutions.{" "}
            </p>
            <p>
              I have hands-on experience in Python, C, front-end web development
              (HTML, CSS, JavaScript, React), and backend technologies like
              Node.js. One of my key projects is a web-based File Management
              System built using Flask. Outside the tech world, I’m a football
              enthusiast and music lover who enjoys playing the flute, guitar,
              and beatboxing. I believe in continuous learning and teamwork, and
              I’m eager to apply my skills to solve real-world problems in the
              IT industry.{" "}
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="abou-achivs">
        <div className="about-achiv">
          <h1>20+</h1>
          <p>HACKER RANK PROBLEMS SOLVED</p>
        </div>
        <div className="about-achiv">
          <h1>3+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achiv">
          <h1>1</h1>
          <p>INTERNSHIP ONGOING</p>
        </div>
      </div>
    </div>
  );
};

export default About;
