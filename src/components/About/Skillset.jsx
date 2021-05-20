import React from "react";
import Pll from "react-pll";
import { DiGit } from "react-icons/di";
import { SiMysql, SiReact, SiCss3 } from "react-icons/si";
function Skillset() {
  return (
    <div className="row skill-row">
      <div className="col-4 col-md-2 tech-icons">
        <Pll alt="Python Logo" height={50} language="python" />
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <Pll alt="Java Logo" height={50} language="java" />
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <Pll alt="C Logo" height={50} language="c" />
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <Pll alt="Cpp Logo" height={50} language="cpp" />
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <Pll alt="html5 Logo" height={50} language="html" />
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <SiCss3></SiCss3>
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <Pll alt="javascript Logo" height={50} language="javascript" />
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <SiReact></SiReact>
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <DiGit></DiGit>
      </div>
      <div className="col-4 col-md-2 tech-icons">
        <SiMysql></SiMysql>
      </div>
    </div>
  );
}

export default Skillset;
