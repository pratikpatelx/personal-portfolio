import React from "react";
import ParticleAnimations from "../../animations/ParticleAnimations";
import Pdf from "../../assets/documents/PratikPatelResume.pdf";
import { HiOutlineDocumentText } from "react-icons/hi";
import ResumeElement from "./ResumeElement";
import { BsBriefcase } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
function Resume() {
  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <div className="container-fluid resume-section">
      <ParticleAnimations></ParticleAnimations>
      <div className="container">
        <div className="row" id="resume-row">
          <button
            className="btn btn-primary btn-test"
            onClick={onResumeClick}
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineDocumentText></HiOutlineDocumentText>
            &nbsp;View Resume
          </button>
        </div>
        <div className="row resume">
          <div className="col-md-6 resume-left">
            <h3 className="resume-title">
              {" "}
              <BsBriefcase id="brief-case"></BsBriefcase> &nbsp;Work Experience
            </h3>
            <ResumeElement
              heading="FarmLink Marketing Solutions"
              title="Full Stack Developer"
              date="January 2020 - April 2020"
              description="Designed and Developed features of a web application to be used to generate reports and visualize data to be used by the internal staff"
              tools="Python 3, Flask, SqLite, React, Material UI"
            ></ResumeElement>

            <ResumeElement
              heading="Cox Communications"
              title="Technical Support Representative (Tier II)"
              date="May 2020 - Sept 2020"
              description="Troubleshooting issues with signal issues, equipment issues, connection issues, and any other issues where customers are not receiving optimal service from Cox Communications"
            ></ResumeElement>
            <ResumeElement
              heading="Indigo Park Canada Inc"
              title="Customer Support Representative"
              date="May 2017 - Sept 2020"
              description="Responded to all front-line initial customer inquires and issues, and tried to ensure a first response resolution appropriately
              and Escalated customer issues that require more in depth assistance to the appropriate management team"
            ></ResumeElement>
          </div>
          <div className="col-md-6 resume-right">
            <h3 className="resume-title">
              <IoSchoolOutline id="brief-case"></IoSchoolOutline>{" "}
              &nbsp;Educational Qualifications
            </h3>
            <ResumeElement
              heading="Bachelor of Computer Science"
              description="Major's degree"
              title="University of Manitoba"
              date="Sept 2016 - May 2021"
            ></ResumeElement>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
