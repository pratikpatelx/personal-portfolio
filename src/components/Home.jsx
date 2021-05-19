import React from "react";
import ParticleAnimations from "../animations/ParticleAnimations";
import Hello from "../assets/22.svg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingAnimation from "../animations/TypingAnimation";

function Home() {
  return (
    <>
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
              </div>
              <div className="col-sm-6" id="col-test">
                <img
                  src={Hello}
                  className="img-fluid animated"
                  alt="home"
                ></img>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
