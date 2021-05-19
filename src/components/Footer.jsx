import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col footer-copyright">
          <h3>Designed and Developed by Pratik Patel</h3>
        </div>
        <div className="col footer-copyright">
          <h3>Copyright © {year} Pratik Patel</h3>
        </div>
        <div className="col footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pratik-patel-622183b1/"
                rel="noreferrer"
                target="_blank"
                aria_label="LinkedIn"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/pratikpatelx"
                rel="noreferrer"
                target="_blank"
                aria_label="Github"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto: patelpk3@myumanitoba.ca"
                rel="noreferrer"
                target="_blank"
                aria_label="GMail"
                style={{ color: "white" }}
              >
                <GrMail></GrMail>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/pratikP123"
                rel="noreferrer"
                target="_blank"
                aria_label="Twitter"
                style={{ color: "white" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
