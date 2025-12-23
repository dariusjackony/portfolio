import MyPic from "../../assets/--/0day.jpg";
import "./About.css";
import { Link } from "react-router-dom";
export default function About() {
    const aboutData = [
        {
          image: MyPic,
          top: "I am Darius Jackony, a passionate developer with a strong interest in technology, and building innovative digital solutions. I focus on creating practical, scalable, and forward-thinking projects that bridge technology with real-world applications.",
          bottom: " I approach every challenge with curiosity, analytical thinking, and a commitment to quality, ensuring each solution is both functional and impactful. Currently learning new technologies."
        }
    ]
    return(
        <section className="about-main-section">
            <span className="about-title">
                About Me
            </span>
            <div className="about-content">
                <div className="about-image">
                    <img src={MyPic} className="abt-img" />
                </div>
                <div className="about-details">
                    {aboutData.map((data, i) =>(
                       <div className="details-card" key={i}>
                          <p className="about-para">{data.top}</p>
                          <p className="about-para">{data.bottom}</p>
                          <Link to="./ContactPage">
                             <button className="about-btn">Contact Me</button>
                          </Link>
                       </div>
                    ))}
                </div>
            </div>
        </section>
    )
}