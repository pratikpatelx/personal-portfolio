import React from "react";
import {
  SiLinux,
  SiVisualstudiocode,
  SiGithub,
  SiEclipseide,
  SiPostman,
} from "react-icons/si";

function Toolset() {
  return (
    <div className="row skill-row">
      <div className="col-4 col-md-2 tech-icons">
        <SiLinux></SiLinux>
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <SiVisualstudiocode></SiVisualstudiocode>
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <SiGithub></SiGithub>
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <SiEclipseide></SiEclipseide>
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <SiPostman></SiPostman>
      </div>
    </div>
  );
}

export default Toolset;
