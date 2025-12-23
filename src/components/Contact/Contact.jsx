import "./Contact.css";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
export default function Contact(){
    return(
        <section className="contact-cta">
            <span className="contact-title">Contact Me</span>
            <p className="contact-subtitle">
                Feel free to reach out for projects or collaboration
            </p>
            <div className="contact-content">
                <form>
               <input type="text" placeholder="Your Name" required />
               <input type="email" placeholder="Email" required/>
               <textarea  id="" placeholder="Write your message"></textarea>
               <button className="submit-btn"> Submit Message</button>
            </form>
            <div className="socials">
                <span>Find Me On</span>
                <div className="social-link">
                    <a href="https://github.com/dariusjackony" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/darius-jackony-93a04a250/" target="_blank">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/0day_RS" target="_blank">
                        <FaTwitter />
                    </a>
                </div>
            </div>
            </div>
        </section>
    )
}