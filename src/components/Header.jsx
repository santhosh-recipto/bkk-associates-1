"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FFD560] text-black py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex gap-3 items-center">
          <img
            src="/CA-India-Logo.png"
            alt="CA Logo"
            className="h-10 md:h-14 w-auto"
          />
          <div className="flex flex-col tracking-wide text-gray-600">
            <span className="font-bold text-xl md:text-3xl">
              BKK & ASSOCIATES
            </span>
            <span className="block md:text-xl">Chartered Accountants</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 uppercase text-xl">
          <a href="#services" className="hover:text-[#175888]">
            Services
          </a>
          <a href="#about" className="hover:text-[#175888]">
            About
          </a>
          <a href="#contact" className="hover:text-[#175888]">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#175888] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="absolute uppercase z-20 top-24 left-0 w-full bg-[#FFD560] text-center py-4 shadow-lg md:hidden">
            <a
              href="#services"
              className="block py-2 text-lg hover:text-[#175888]"
              onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a
              href="#about"
              className="block py-2 text-lg hover:text-[#175888]"
              onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-lg hover:text-[#175888]"
              onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
