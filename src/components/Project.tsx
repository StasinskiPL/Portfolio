import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

interface Props {
  project: {
    title: string;
    description: string;
    link: string;
    githubLink: string;
    image: string;
    detailsImages: Array<string>;
  };
}

const Project: React.FC<Props> = ({ project }) => {
  const { title, image } = project;
  const [showDetails, setShowDetail] = useState(false);
  const [originPos, setOriginPos] = useState<{ x: Number; y: Number } | null>(
    null
  );

  const clickHandle: Function = (e: MouseEvent) => {
    setOriginPos({ x: e.clientX, y: e.clientY });
    setShowDetail(true);
  };

  return (
    <>
      <article className="project" onClick={(e) => clickHandle(e)}>
        <div className="project__center">
          <img loading="lazy" className="project-image" src={image} alt="" />
          <div className="project__info">
            <div>
              <h1 className="project__info-text">{title}</h1>
              <h3 className="project__info-subtext">Show More</h3>
            </div>
          </div>
        </div>
      </article>
      {showDetails && (
        <ProjectDetails
          project={project}
          closeModal={() => setShowDetail(false)}
          originPosition={originPos || null}
        />
      )}
    </>
  );
};

export default Project;
