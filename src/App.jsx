import Homepage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import BlogData from "./components/Blog/BlogData";
import BlogDetails from "./components/Blog/BlogDetails";
import { Routes, Route } from "react-router-dom";
export default function App(){
  return (
    <>
     <Navbar />
     <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/ProjectsPage" element={<ProjectsPage />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/BlogData" element={<BlogData />} />
       <Route path="/BlogData/:postId" element={<BlogDetails />} />
     </Routes>
    </>
  )
}