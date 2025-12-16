import Homepage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
export default function App(){
  return (
    <>
     <Navbar />
     <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/ProjectsPage" element={<ProjectsPage />} />
       <Route path="/Contact" element={<Contact />} />
     </Routes>
    </>
  )
}