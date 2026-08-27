"use client"
import ecommerce from "../assets/luxury.png";
import Trial from "../assets/trial.png";
import School from "../assets/school.png";
import vibes from "../assets/Screenshot from 2026-08-19 21-57-36.png";
import Agriculrure from "../assets/coffee-plant-1.webp"
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Monitor } from "lucide-react";
export default function Projects(){
    const projects = [
        {
            id: 1,
            name: "Boutique E-commerce Website",
            image: ecommerce,
            description:
            "A modern fashion boutique website featuring a stylish product catalog, category browsing, product details, and a responsive shopping experience for shoes, clothing, and watches.",
            technologies: [
            "Next.js",
            "Tailwind CSS",
            
            ],
            liveDemo: "https://luxury-vintage-store-alpha.vercel.app/",
            github: "https://github.com/dariusjackony/luxury-vintage-store",
        },
        {
            id: 2,
            name: "AI-Powered Agriculture Platform",
            image: Agriculture,
            description:
                "An AI-powered agriculture platform designed to help farmers make smarter decisions through intelligent insights, crop guidance, and data-driven farming solutions.",
            technologies: [
                "Next.js",
                "Tailwind CSS",
                "Python",
                "AI/ML",
            ],
            liveDemo: "https://",
            github: "https://github.com/dariusjackony",
            },
        {
            id: 3,
            name: "School website",
            image: School,
            description:
            "A school website designed to showcase academics, school life, admissions, and achievements while providing parents and students with easy access to important information..",
            technologies: [
            "React",
            "Tailwind CSS",
            
            ],
            liveDemo: "https://",
            github: "https://github.com/dariusjackony",
        },
        {
            id: 4,
            name: "Event Experience Website",
            image: vibes,
            description:
                " a  youth-focused entertainment experience. The platform showcases the event, featured artists, upcoming activities, media, and event information through an engaging and responsive digital experience.",
            technologies: [
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
            ],
            liveDemo: "https://uthando-vibes.vercel.app/",
            github: "https://github.com/dariusjackony",
        },
    ];
    return(
        <section className="px-4 mt-2  gap-5 max-w-4xl mx-auto ">
            <h2 className="font-medium text-2xl tracking-wide text-center">Projects</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 mt-5  border border-gray-200 dark:border-gray-700">
                <h2 className="font-medium text-2xl tracking-wide ">Work.</h2>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <p className="text-gray-600 dark:text-gray-300 ">
                        Projects I've built and open-source contributions I've made.
                    </p>

                    <button className="hidden md:inline-flex items-center bg-blue-600  text-white px-6 py-3 rounded-lg ">
                        Open Source
                    </button>
                </div>
                
            </div>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item) => (
                <div
                key={item.id}
                className="overflow-hidden  border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                >
                <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-52 object-cover"
                />
                <div className="p-5">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.name}
                    </h2>

                    <p className="mt-3 text-gray-600 dark:text-gray-300  leading-relaxed">
                    {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                    {item.technologies.map((stack) => (
                        <span
                        key={stack}
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                        >
                        {stack}
                        </span>
                    ))}
                    </div>
                    <div className="flex gap-3 mt-6">
                    <a
                        href={item.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-1 rounded-lg bg-blue-600 text-white"
                    >
                        Live Demo
                        <Monitor size={16} />
                    </a>

                    <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-1 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                        Github
                        <FaGithub size={16} />
                    </a>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </section>
    )
}