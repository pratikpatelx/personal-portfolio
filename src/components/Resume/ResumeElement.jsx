import React from "react";

function ResumeElement(props) {
  return (
    <div className="resume-item">
      <h4 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.heading}
      </h4>
      <h5>{props.title}</h5>
      <p>
        <em>{props.date}</em>
      </p>
      <p>{props.description}</p>
      <p id="tools-p">{props.tools}</p>
    </div>
  );
}

export default ResumeElement;
