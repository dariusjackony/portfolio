import profile from "../assets/20250503_080920 (2).jpg";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
export default function Hero(){
    return(
        <div className="px-4 mt-2 flex flex-col gap-5 md:flex-row max-w-4xl mx-auto ">
            <div>
                <h2 className="text-3xl font-medium tracking-wide">System Designer. Problem Solver.</h2>
                <div className="mt-3">
                    <p className="mt-1 text-gray-700 dark:text-white  leading-relaxed ">
                      I build software that is fast, secure, and easy to use.
                    </p>
                    <p className="mt-1 text-gray-700 dark:text-white leading-relaxed">
                      I'm passionate about web development, software architecture, databases, networking, and IT solutions.
                    </p>
                    <p className="mt-1 text-gray-700 leading-relaxed dark:text-white">
                      Here you'll find tutorials, project breakdowns, development tips, and practical insights from building real-world systems.
                    </p>
                </div>
                <button className="p-2 px-5 py-4 bg-blue-600 text-white mt-5 rounded">
                    Let's work together
                </button>
            </div>
            <div className="relative flex justify-center mt-8 md:mt-0">
                <Image 
                    src={profile} 
                    alt="profile" 
                    width={400}
                    height={400}
                    className="rounded-lg"
                />

                <Link
                    href="/resume.pdf"
                    download
                    className="absolute -bottom-4 flex gap-2 items-center right-4 bg-black text-white px-5 py-3 rounded"
                >
                    <Download size={20} />
                    Download Resume
                </Link>
                </div>
            
        </div>
    )
}