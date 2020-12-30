import React, { useEffect } from "react";
import { projectsList } from "../assets/projects/projects";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  useEffect(() => {
    gsap.to(".project", {
      scrollTrigger: ".project",
      duration: 1,
      opacity: 1,
      stagger: 0.3,
      ease: Power3.easeInOut,
    });
  });

  const renderProjects = projectsList.map((project, index) => (
    <Project key={index} project={project} />
  ));
  return (
    <section className="projects" id="projects">
      <div className="projects__center">
        <div className="projects-title">
          <h1>Projects</h1>
        </div>
        <div className="projects__context">{renderProjects}</div>
      </div>
    </section>
  );
};

export default Projects;
