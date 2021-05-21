import React from "react";
import ParticleAnimations from "../../animations/ParticleAnimations";
import aboutImg from "../../assets/pictures/About.svg";
import Skillset from "./Skillset";
import Toolset from "./Toolset";

function About() {
  return (
    <div className="container-fluid about-section">
      <ParticleAnimations></ParticleAnimations>
      <div className="container-fluid">
        <div className="row about-row">
          <div className="col-md-7 about-cols">
            <h1 className="h1-col">
              Get to <strong className="name-color">Know Me</strong>
            </h1>
            <div className="card about-card">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p className="card-p">
                    Hi Everyone, I am{" "}
                    <span className="name-color">Pratik Patel.</span>
                    <br />A passionate software developer based in Canada
                    <br />I enjoy designing/architecting systems and writing
                    software to solve problems
                    <br />
                    <br />
                    Some of my areas of interest are:
                  </p>
                  <ul>
                    <li className="about-list">Web-Based Systems</li>
                    <li className="about-list">Software Engineering</li>
                    <li className="about-list">Networks and Security</li>
                    <li className="about-list">Artificial Intelligence</li>
                  </ul>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-5 about-img-col about-img">
            <img src={aboutImg} alt="about" className="img-fluid"></img>
          </div>
        </div>
        <div className="skill-test">
          <h1>
            Professional <strong className="name-color">Skillset</strong>
          </h1>
          <Skillset></Skillset>
        </div>
        <div className="tool-test">
          <h1>
            <strong className="name-color">Tools</strong> I use
          </h1>
          <Toolset></Toolset>
        </div>
      </div>
    </div>
  );
}

export default About;
