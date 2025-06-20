import React from 'react'
import logo from '../assets/images/logo.png'
import { useState } from 'react';
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <header className="flex h-[80px] bg-[#4A51C3] justify-between items-center  lg:px-[150px] md:px-[50px]  px-[20px] overflow-hidden">
            <img className="w-[auto]" src={logo} alt="logo" />

            <button className="text-white text-2xl md:hidden" onClick={toggleMenu}>
                &#9776;
            </button>

            <div
                className={`${isMenuOpen
                    ? "flex flex-col absolute top-14 right-4 bg-black p-4 z-10"
                    : "hidden"
                    } md:flex items-center lg:gap-[50px] sm:gap-[20px]`}
            >
                <ul className="font-stolzl text-white flex flex-col md:flex-row list-none lg:gap-[50px] sm:gap-[20px]">
                    <li>Neu Hier</li>
                    <li>Über</li>
                    <li>Tools</li>
                    <li>Blog</li>
                </ul>
                <button className="text-[#222222] bg-[#C8F904] rounded-[10px] px-[20px] py-[10px] md:text-sm">
                    Durchstarten
                </button>
            </div>
        </header>
    )
}

export default Header