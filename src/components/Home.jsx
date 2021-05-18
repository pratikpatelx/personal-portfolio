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
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center flex-column">
                    <h1 className="h1-heading">
                      Hi There <span class="wave">👋🏻</span>
                    </h1>
                    <h2 className="mt-4" id="h2-text">
                      I'M <strong className="name-color">PRATIK PATEL</strong>{" "}
                    </h2>
                    <div className="typing-animation">
                      <strong className="name-color">
                        <TypingAnimation></TypingAnimation>
                      </strong>{" "}
                    </div>
                  </div>
                  <div className="col-lg-6 order-2 order-lg-1 header-img">
                    <img
                      src={Hello}
                      className="img-fluid animated"
                      alt="home"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
