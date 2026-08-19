"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="px-2 p-4 lg:max-w-4xl lg:m-auto">
            <div className="flex items-center justify-between">
                <Link href="/">
                <div className="flex gap-2 items-center">
                    <img src="/images/resource.jpeg" 
                 alt="" 
                 className="w-10 h-10 rounded-full"
                 />
                    <h1 className="text-xl text-black dark:text-white font-semibold">
                        Jackony
                    </h1>
                </div>
                
                </Link>

                {mounted && (
                    <button 
                        onClick={() => 
                            setTheme(resolvedTheme === "dark" ? "light" : "dark")
                        }
                    >
                        {resolvedTheme === "dark" ? (
                            <Sun className="w-6 h-6 cursor-pointer text-blue-500" />
                        ) : (
                            <Moon className="w-6 h-6 cursor-pointer text-blue-500" />
                        )}
                    </button>
                )}
            </div>

            <div className="h-px bg-gray-300 my-8"></div>
        </nav>
    )
}