interface Props {
  skill: { name: string; img: string };
}

const Skill: React.FC<Props> = ({ skill }) => {
  const { name, img } = skill;
  return (
    <div className="skill">
      <div className="skill__center">
        <img className="skill-img" src={img} alt={name} />
        <h2 className="skill-name">{name}</h2>
      </div>
    </div>
  );
};

export default Skill;
