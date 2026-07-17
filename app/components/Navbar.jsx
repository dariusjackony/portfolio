"use client"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"
export default function Navbar(){
    const {theme, setTheme} = useTheme();
    return(
        <nav className="px-2 p-4 lg:max-w-4xl lg:m-auto">
            <div className=" flex items-center justify-between ">
                 <h1 className="text-xl text-black dark:text-white">
                   Jackony
                  </h1>
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? (
                    <Sun  className="w-6 h-6 text-blue"/>
                    ) : (
                        <Moon className="w-6 h-6 text-blue" />
                    )}
                </button>
            </div>
           
           <div className="h-px bg-gray-300 my-8"></div>
        </nav>
    )
}