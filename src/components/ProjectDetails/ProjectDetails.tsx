import React, { useEffect, useRef } from "react";
import { gsap, Power1 } from "gsap";
import { FaTimes } from "react-icons/fa";
import ProjectDetailsBody from "./ProjectDetailsBody";
interface Props {
  project: {
    title: string;
    description: string;
    link: string;
    githubLink: string;
    image: string;
  };
  originPosition: {
    x: Number;
    y: Number;
  } | null;
  closeModal: () => void;
}

const ProjectDetails: React.FC<Props> = ({
  project,
  originPosition,
  closeModal,
}) => {
  const originX = originPosition ? originPosition.x : "center";
  const originy = originPosition ? originPosition.y : "center";
  const detailsRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    gsap.to(detailsRef.current, {
      visibility: "visible",
      duration: 0.5,
      scale: 1,
      transformOrigin: `${originX}px ${originy}px`,
      ease: Power1.easeOut,
    });
  });

  const clickHandler: Function = () => {
    document.body.style.overflow = "initial";
    gsap.to(detailsRef.current, {
      visibility: "hidden",
    });
        closeModal();
  };

  return (
    <div ref={detailsRef} className="projectDetails">
      <div className="projectDetails__center">
        <div className="projectDetails__header">
          <FaTimes onClick={() => clickHandler()} />
        </div>
      <ProjectDetailsBody project={project}/>
      </div>
    </div>
  );
};

export default ProjectDetails;
