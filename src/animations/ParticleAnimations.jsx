import React from "react";
import Particles from "react-particles-js";

function ParticleAnimations() {
  return (
    <div className="main-container">
      <Particles
        params={{
          particles: {
            number: {
              value: 700,
              density: {
                enable: true,
                value_area: 2000,
              },
            },
            line_linked: {
              enable: false,
              opacity: 0.03,
            },
            move: {
              direction: "right",
              speed: 0.07,
            },
            size: {
              value: 0.75,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default ParticleAnimations;
