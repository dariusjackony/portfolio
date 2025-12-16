import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "Python", level: 50 },
    { name: "Javascript", level: 75 },
    { name: "React", level: 55 },
    { name: "HTML", level: 80 },
    { name: "CSS", level: 85 },
  ];
  const tools =[
    { name: "Git & Github", level: 67},
    { name: "Responsive Design", level: 80},
    { name: "UI Implementation", level: 50}
  ]

  return (
    <section className="skills">
      <span className="section-title">Skills</span>
      <p className="section-desc">
        A visual overview of my current technical abilities and focus areas.
      </p>
      <div className="skills-main-content-container">
        <div className="skills-content">
        <span className="skill-c-title">Frontend Development</span>
        <div className="skills-details-main-container">
          {skills.map((skill, index) => (
          <div className="skill" key={index}>
          <div className="skill-info">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          </div>
        ))}
        </div>
      </div>
      <div className="tools">
        <span className="skill-c-title">
            Tools & Workflow
        </span>
        <div className="tools-content">
              {tools.map((tools, i) => (
                <div className="tools-content-container">
                    <div className="tools-details">
                        <span>{tools.name}</span>
                        <span>{tools.level}%</span>
                    </div>
                    <div className="tool-progress">
                    <div className="tools-bar" style={{width: `${tools.level}%`}}></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
      </div>
    </section>
  );
}
