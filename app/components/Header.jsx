import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 mx-4 mt-4">
      <nav className="backdrop-blur-md bg-black/20 rounded-3xl px-6 py-4 flex justify-between items-center w-[75%] sm:w-[75%] md:w-[50%] lg:w-[40%] xl:w-[40%] max-w-3xl mx-auto sticky">
       <img src="/icon.png" alt="icon" className="h-8" />
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="text-gray-300 hover:text-white transition-colors">
              Work
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
