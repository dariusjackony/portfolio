"use client"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"
export default function Navbar(){
    const { resolvedTheme, setTheme } = useTheme();
    return(
        <nav className="px-2 p-4 lg:max-w-4xl lg:m-auto">
            <div className=" flex items-center justify-between ">
                 <h1 className="text-xl text-black dark:text-white font-semibold">
                   Jackony
                  </h1>
                <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                    {resolvedTheme === "dark" ? (
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