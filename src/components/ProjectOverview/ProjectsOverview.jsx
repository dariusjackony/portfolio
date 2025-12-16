import "./ProjectsOverview.css";
export default function ProjectsOverview(){
    return(
        <section className="projects-overview">
            <div className="projects-overview-container">
                <span className="projects-overview-title">Work & Experiments</span>
                <div className="projects-overview-content">
                  <p className="project-overview-subtitle">
                   I build projects that combine clean design with simple logic,
                   making sure they work well on all devices and easy to use.
                  </p>
                   <button className="p-o-btn">Open Projects</button>
                </div>
            </div>
        </section>
    )
}