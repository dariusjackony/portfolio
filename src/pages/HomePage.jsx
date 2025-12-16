import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import ProjectsOverview from "../components/ProjectOverview/ProjectsOverview";
import Footer from "../components/Footer/Footer";
export default function Homepage(){
    return(
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <ProjectsOverview />
          <Footer />
        </>
    )
}