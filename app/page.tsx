import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Links from "./components/Links";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
       <Hero />
       <Links />
       <Footer />
    </div>
  );
}
