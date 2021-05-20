import React from "react";
import ParticleAnimations from "../../animations/ParticleAnimations";
import ProjectsCard from "./ProjectsCard";
import sorting from "../../assets/Sorting.png";
import answerBot from "../../assets/AnsBot.jpg";
import keyboard from "../../assets/bg2.jpg";
import server from "../../assets/server.jpg";
import chat from "../../assets/chat.jpg";
import flashCard from "../../assets/flashy.jpg";
import construction from "../../assets/comingsoon.jpg";

function Projects() {
  return (
    <div className="container-fluid project-section">
      <ParticleAnimations></ParticleAnimations>
      <div className="container">
        <h1 className="project-heading">
          {" "}
          My <strong className="name-color">Projects</strong>
        </h1>
        <p id="project-p">Here are a few projects I have worked on recently.</p>
        <div className="row project-row">
          <div className="col-md-4 project-card">
            <ProjectsCard
              imgPath={sorting}
              title="Sorting Visualizer"
              description="A Sorting Algorithms visualizer tool built with React.js, react-bootstrap. Algorithms implemented are Merge Sort, Quick Sort, Bubble Sort and Insertion Sort."
              link="https://github.com/pratikpatelx/SortingVisualization"
            ></ProjectsCard>
          </div>

          <div className="col-md-4 project-card">
            <ProjectsCard
              imgPath={answerBot}
              title="AnswerBot"
              description="AnswerBot is an automated tool that generates answer summary to Developers' Technical Questions. Built with Python, scikit learn and SqLite3 database"
              link="https://github.com/pratikpatelx/AnswerBot"
            ></ProjectsCard>
          </div>

          <div className="col-md-4 project-card">
            <ProjectsCard
              imgPath={keyboard}
              title="Linux Kernel keyboard Driver"
              description="A Linux Kernel Keyboard driver written in low level C."
              link="https://github.com/pratikpatelx/Linux-Kernel-keyboard-driver"
            ></ProjectsCard>
          </div>

          <div className="col-md-4 project-card">
            <ProjectsCard
              imgPath={server}
              title="Http Server"
              description="A basic web server that supports POST, GET and (.CGI) script execution. Built with Python 3 using Socket Programming"
              link="https://github.com/pratikpatelx/HttpServer"
            ></ProjectsCard>
          </div>

          <div className="col-md-4 project-card">
            <ProjectsCard
              imgPath={chat}
              title="MultiThreaded Chat Application"
              description="A TCP multithreaded chat application using the server/client architecture. Built using Python 3"
              link="https://github.com/pratikpatelx/MultiThreadedChat"
            ></ProjectsCard>
          </div>

          <div className="col-md-4 project-card">
            <ProjectsCard
              imgPath={flashCard}
              title="Flashy"
              description="Flashy is an android application that allows anyone reviewing study material to create, view, and organize digital flashcards, from anywhere. Group Project was implemented using Java, mySql database"
              link="https://code.cs.umanitoba.ca/comp3350-winter2019/flashme---group-14"
            ></ProjectsCard>
          </div>
        </div>
        <div className="blogs-section">
          <h1 className="project-heading">
            My Recent <strong className="name-color">Blog Posts</strong>
          </h1>
          <p id="project-p">
            Some of my blog posts about the topics I'm Interested in
          </p>

          <div className="col-md-4 project-card">
            <ProjectsCard
              imgPath={construction}
              title="Computer Security Labs...Coming Soon !"
              description="This post will contain some of my mini computer security lab vulnerabilities that are inspired by SEED labs"
            ></ProjectsCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
