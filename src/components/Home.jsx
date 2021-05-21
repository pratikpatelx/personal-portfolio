import React from "react";
import ParticleAnimations from "../animations/ParticleAnimations";
import Hello from "../assets/pictures/Coding.svg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingAnimation from "../animations/TypingAnimation";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Home() {
  return (
    <section className="home-section">
      <ParticleAnimations></ParticleAnimations>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid home-test">
          <div className="row">
            <div className="col-sm-6" id="col-test1">
              <h1 className="h1-heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>
              <h2 id="h2-text">
                I'M <strong className="name-color">Pratik Patel</strong>{" "}
              </h2>
              <div className="typing-animation">
                <strong className="name-color">
                  <TypingAnimation></TypingAnimation>
                </strong>{" "}
              </div>
              <div className="icons-div">
                <h1 className="h1-heading">Let's Connect</h1>
                <p>
                  Feel free to{" "}
                  <span className="name-color"> get in touch with me</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/pratikpatelx"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/pratik-patel-622183b1/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/pratikP123"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="mailto: patelpk3@myumanitoba.ca"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <GrMail />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6" id="col-test">
              <img src={Hello} className="img-fluid animated" alt="home"></img>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
