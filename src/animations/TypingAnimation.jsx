import React from "react";
import Typewriter from "typewriter-effect";

function TypingAnimation() {
  return (
    <Typewriter
      options={{
        strings: ["Software Developer", "Full Stack Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypingAnimation;
