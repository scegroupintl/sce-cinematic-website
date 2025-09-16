"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl animate-float delay-2000"></div>
      </div>

      {/* Film strip decoration */}
      <div className="absolute left-0 top-0 h-full w-2 sm:w-4 lg:w-8 bg-gradient-to-b from-transparent via-gold-400/10 sm:via-gold-400/15 lg:via-gold-400/20 to-transparent">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 30px,
            rgba(251, 191, 36, 0.1) 30px,
            rgba(251, 191, 36, 0.1) 35px
          )`,
          }}
        ></div>
      </div>

      <div className="absolute right-0 top-0 h-full w-2 sm:w-4 lg:w-8 bg-gradient-to-b from-transparent via-gold-400/10 sm:via-gold-400/15 lg:via-gold-400/20 to-transparent">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 30px,
            rgba(251, 191, 36, 0.1) 30px,
            rgba(251, 191, 36, 0.1) 35px
          )`,
          }}
        ></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div
              className={`space-y-6 ${
                mounted ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-elegant font-semibold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-stone-300 to-amber-600 tracking-wide drop-shadow-[0_0_1px_rgba(255,255,255,0.4)] [text-shadow:0_1px_0_rgba(255,248,220,0.8),0_2px_0_rgba(205,180,140,0.6),0_3px_0_rgba(160,130,95,0.4)] leading-tight">
                Capturamos Momentos que Trascienden
              </h1>
            </div>

            {/* Description */}
            <div
              className={`${
                mounted ? "animate-slide-up delay-500" : "opacity-0"
              }`}
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-lg">
                En SCE Cinematic Group, nos especializamos en crear contenido
                audiovisual de alta calidad que da vida a tus historias. Ya sea
                un evento o una entrevista, aseguramos que cada momento sea
                capturado con precisión y arte.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 ${
                mounted ? "animate-slide-up delay-800" : "opacity-0"
              }`}
            >
              <button
                className="relative px-8 py-4 cursor-pointer bg-gradient-to-r from-secondary-600 to-secondary-500 text-white font-cinematic font-semibold rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-secondary-500/50 hover:brightness-110 overflow-hidden group"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10">Ver Portafolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]"></div>
              </button>

              <button
                className="relative px-8 py-4 cursor-pointer bg-transparent border border-gold-400 text-gold-400 font-cinematic font-semibold rounded-lg transition-all duration-300 hover:text-black hover:bg-gradient-to-r hover:from-gold-600 hover:to-gold-500 hover:scale-110 hover:shadow-2xl hover:shadow-gold-500/50 hover:brightness-110 overflow-hidden group"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10">Contactar Ahora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]"></div>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`lg:flex justify-center items-center hidden ${
              mounted ? "animate-fade-in delay-1000" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-[500px] h-80 bg-gray-600/30 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm">
                <svg
                  className="w-32 h-32 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary-500/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gold-400/20 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-500 to-transparent"></div>
    </section>
  );
}
