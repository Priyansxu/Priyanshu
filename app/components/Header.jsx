import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 mx-4 mt-4  w-[90%] sm:w-[75%] md:w-[40%] lg:w-[45%] xl:w-[35%] max-w-3xl mx-auto inset-0">
      <nav className="backdrop-blur-md bg-black/20 rounded-3xl px-6 py-4 flex justify-between items-center">
       <img src="/icon.svg" alt="icon" className="h-8" />
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-gray-300 text-sm hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-300 text-sm hover:text-white transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#social" className="text-gray-300 text-sm hover:text-white transition-colors">
              Social
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
