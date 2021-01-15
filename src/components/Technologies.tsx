import { skills } from "../assets/skills/skills";
import Skill from "./Skill";

const Technologies: React.FC = () => {
  const renderedSkills = skills.map((skill, index) => (
    <Skill key={index} skill={skill} />
  ));

  return (
    <section className="tech">
      <div className="tech__center">
        <div className="tech-title">
          <h2>Skills</h2>
        </div>
        <div className="tech__context">{renderedSkills}</div>
      </div>
    </section>
  );
};

export default Technologies;
