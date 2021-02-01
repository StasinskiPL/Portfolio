import { projectsList } from "../assets/projects/projects";
import { gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {

  const renderProjects = projectsList.map((project, index) => (
    <Project key={index} project={project} />
  ));
  return (
    <section className="projects" id="projects">
      <div className="projects__center">
        <div className="projects-title">
          <h2>Projects</h2>
        </div>
        <div className="projects__context">{renderProjects}</div>
      </div>
    </section>
  );
};

export default Projects;
