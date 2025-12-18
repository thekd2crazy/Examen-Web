"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa"
import AnimatedUnderline from "./Animation";

export function Hamburger() {
    return < FaBars size={50} />;
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (

        <nav className="bg-black border-b shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold text-white ">
                        Examen-web
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-6 text-white " >
                        <Link href="/" className="block hover:text-orange-500">Accueil</Link>
                        <Link href="/booking" className="block hover:text-orange-500">booking</Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        <Hamburger />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-black  py-3">
                    <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-orange-500 text-white"
                        onClick={() => setOpen(false)}
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/booking"
                        className="block px-4 py-2 hover:bg-orange-500 text-white"
                        onClick={() => setOpen(false)}
                    >
                        booking
                    </Link>

                </div>
            )}
        </nav>


    );
}
