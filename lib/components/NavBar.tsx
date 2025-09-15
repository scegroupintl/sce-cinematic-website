"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Oswald } from "next/font/google";
import Image from "next/image";

const cinematicFont = Oswald({ weight: "400", subsets: ["latin"] });

export const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-primary-500/95 backdrop-blur-sm border-b border-secondary-400/20 shadow-2xl fixed w-full top-0 z-50 transition-transform duration-300 ${
        cinematicFont.className
      } ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white py-2">
              <Link href={`/`}>
                <div className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 relative">
                    <Image
                      src="/sce-cinematic.jpg"
                      alt="SCE Cinematic Group"
                      width={48}
                      height={48}
                      className="rounded-full object-cover border-2 border-secondary-400/30 group-hover:border-secondary-400 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-secondary-400/30 transition-all duration-300 ease-out"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href={`/`}>
                <div className="relative group text-gray-300 hover:text-secondary-400 px-3 py-2 transition-colors duration-300 font-medium">
                  Inicio
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </div>
              </Link>
              <Link href={`/#portfolio`}>
                <div className="relative group text-gray-300 hover:text-secondary-400 px-3 py-2 transition-colors duration-300 font-medium">
                  Portafolio
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </div>
              </Link>
              <Link href={`/about`}>
                <div className="relative group text-gray-300 hover:text-secondary-400 px-3 py-2 transition-colors duration-300 font-medium">
                  Sobre Nosotros
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </div>
              </Link>
              <Link href={`/#contact`}>
                <div className="relative group text-gray-300 hover:text-secondary-400 px-3 py-2 transition-colors duration-300 font-medium">
                  Contacto
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </div>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-gray-300 hover:text-secondary-400 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/*<!-- Mobile menu --> */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          showMobileMenu ? "h-[200px]" : "h-0"
        } bg-primary-400/95 backdrop-blur-sm border-t border-secondary-400/20 shadow-lg transition-all duration-150 ease-out overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href={`/`}>
            <div
              className="relative group block px-3 py-2 text-gray-300 hover:text-secondary-400 transition-colors duration-300 font-medium"
              onClick={toggleMobileMenu}
            >
              Inicio
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </div>
          </Link>
          <a
            href={`/#portfolio`}
            className="relative group block px-3 py-2 text-gray-300 hover:text-secondary-400 transition-colors duration-300 font-medium"
            onClick={toggleMobileMenu}
          >
            Portafolio
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <Link href={`/about`}>
            <div
              className="relative group block px-3 py-2 text-gray-300 hover:text-secondary-400 transition-colors duration-300 font-medium"
              onClick={toggleMobileMenu}
            >
              Sobre Nosotros
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </div>
          </Link>
          <a
            href={`/#contact`}
            className="relative group block px-3 py-2 text-gray-300 hover:text-secondary-400 transition-colors duration-300 font-medium"
            onClick={toggleMobileMenu}
          >
            Contacto
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};
