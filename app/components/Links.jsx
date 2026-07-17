import Link from "next/link";
import { Folder, Code, Star, Coffee } from "lucide-react";
import { 
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
export default function Links(){
    return(
        <div  className="px-4 mt-10 flex gap-5 flex-col md:flex-row max-w-4xl mx-auto">
            <div>
                <h2 className="font-medium text-2xl tracking-wide">Quick Navigation</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-1 dark:text-white">
                   Everything you need is just a click away. Explore my portfolio, discover
                   the technologies I work with, and see how I design and build modern systems.
                </p>
                <div className="flex flex-col gap-3 mt-4 text-lg">
                 <Link href="/skills"
                  className="flex gap-2 text-blue-500 underline"
                 >
                  <Code />
                  Skills
                 </Link>
                 <Link href="/projects"
                  className=" flex gap-2 text-blue-500 underline"
                 >
                  <Folder  />
                  Projects
                 </Link>
                 <Link href="/reviews"
                  className=" flex gap-2 text-blue-500 underline"
                  >
                  <Star />
                  Client Reviews
                 </Link>
                 <Link href="/cofee"
                  className="flex gap-2 text-blue-500 underline"
                 >
                  <Coffee />
                  Buy me coffee
                 </Link>
                </div>
            </div>
            <div className="mt-5">
                <h2 className="font-medium text-2xl tracking-wide">
                    Stay Connected
                </h2>
                <p className=" mt-1 text-lg text-gray-700 leading-relaxed dark:text-white">
                    Whether it's code, articles, or new projects, you can find me across these 
                    platforms. Feel free to connect, collaborate, or say hello.
                </p>
                <div className="flex justify-center items center flex-wrap gap-4 mt-8 text-lg">
                    <Link href="/"
                    className="flex items-center gap-2"
                    >
                    <FaWhatsapp size={22}/>
                     Whatsapp
                    </Link>
                    <Link href="/" 
                    className="flex items-center gap-2"
                    >
                    <FaYoutube  size={22}/>
                     Youtube
                    </Link>
                    <Link href="/"
                    className="flex items-center gap-2"
                    >
                    <FaTwitter size={22} />
                     Twitter
                    </Link>
                    <Link href="/"
                    className="flex items-center gap-2"
                    >
                    <FaEnvelope  size={22}/>
                     Email
                    </Link>
                    <Link href="/"
                    className="flex items-center gap-2"
                    >
                    <FaLinkedin  size={22}/>
                     Linkedln
                    </Link>
                </div>
                <div className="mt-10">
                    <h2 className="text-lg">Subscribe to my newsletter</h2>
                   <form className="flex flex-col gap-2 mt-2">
                    <input 
                     type="email"
                     placeholder="Enter your email"
                     className="border rounded px-4 py-2"
                    />
                    <button
                        className="bg-blue-600 text-white px-5 py-2 rounded"
                        >
                        Subscribe
                        </button>
                   </form> 
                </div>
                
            </div>
        </div>
    )
}