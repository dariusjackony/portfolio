import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import FirstPic from "../../assets/--/edpsch.png";
import SecondPic from "../../assets/--/gdsltd.png";
export default function Projects(){
const projects = [
    {
      image: FirstPic,
      title: "EduPortal School",
      description: "Modern school website showcasing academics, student life, and key information.",
      technologies: ['React', 'Vanilla CSS'],
      github: "https://",
      live: "https://"
    },
    {
      image: FirstPic,
      title: "EduPortal School",
      description: "Modern school website showcasing academics, student life, and key information.",
      technologies: ['React', 'Vanilla CSS'],
      github: "https://",
      live: "https://"
    },
    {
      image: FirstPic,
      title: "EduPortal School",
      description: "Modern school website showcasing academics, student life, and key information.",
      technologies: ['React', 'Vanilla CSS'],
      github: "https://",
      live: "https://"
    },
 
]
    return(
        <section className="projects-container">
            <div className="projects-content">
                <span className="projects-title">My Portfolio</span>
                <p className="projects-subtitle">
                  Explore the projects I've worked on, each crafted with 
                  attention to detail and passion for technology
                </p>
                <div className="projects-details">
                    {projects.map((project, i) =>(
                        <div className="project-card" key={i}>
                            <img src={project.image} className="project-img" />
                            <div className="pc-details">
                                <span className="pc-title">{project.title}</span>
                                <p className="pc-description">{project.description}</p>
                                <div className="technologies">
                                {project.technologies.map((tech, i) =>(
                                  <div className="tech" key={i}>
                                     <span className="tech-main">{tech}</span>
                                  </div>
                                ))}
                               </div>
                                <div className="project-links">
                                    <a href="">
                                        <FaGithub />
                                    </a>
                                    <a href="">
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}