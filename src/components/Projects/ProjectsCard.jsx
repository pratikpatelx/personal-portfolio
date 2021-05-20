import React from "react";
import { BiLinkExternal } from "react-icons/bi";

function ProjectsCard(props) {
  return (
    <div className="card project-card-view">
      <img className="card-img-top" src={props.imgPath} alt="card img"></img>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text" id="card-p">
          {props.description}
        </p>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <BiLinkExternal /> &nbsp; Visit the Repo
        </a>
      </div>
    </div>
  );
}

export default ProjectsCard;
