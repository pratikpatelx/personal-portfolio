import React from "react";
import Particles from "react-particles-js";

function ParticleAnimations() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 1000,
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
              direction: "left",
              speed: 0.1,
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
    </>
  );
}

export default ParticleAnimations;
