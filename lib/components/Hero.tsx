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
      <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-b from-transparent via-gold-400/20 to-transparent">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 40px,
            rgba(251, 191, 36, 0.3) 40px,
            rgba(251, 191, 36, 0.3) 50px
          )`,
          }}
        ></div>
      </div>

      <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-b from-transparent via-gold-400/20 to-transparent">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 40px,
            rgba(251, 191, 36, 0.3) 40px,
            rgba(251, 191, 36, 0.3) 50px
          )`,
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Headline */}
        <div
          className={`space-y-6 ${mounted ? "animate-slide-up" : "opacity-0"}`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-trajan font-semibold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-stone-300 to-amber-600 tracking-wide drop-shadow-[0_0_1px_rgba(255,255,255,0.4)] [text-shadow:0_1px_0_rgba(255,248,220,0.8),0_2px_0_rgba(205,180,140,0.6),0_3px_0_rgba(160,130,95,0.4)]">
            SCE Cinematic Group
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mt-8 ${
            mounted ? "animate-slide-up delay-500" : "opacity-0"
          }`}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-cinematic text-transparent bg-clip-text bg-gradient-to-r from-stone-300 via-amber-200 to-stone-400 mb-4 tracking-wider [text-shadow:0_1px_0_rgba(255,248,220,0.6),0_1px_1px_rgba(160,130,95,0.3)]">
            Producción Audiovisual
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto"></div>
        </div>

        {/* Cinematic Banner */}
        <div
          className={`mt-12 mb-8 ${
            mounted ? "animate-fade-in delay-800" : "opacity-0"
          }`}
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600/20 to-gold-400/20 blur-xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1575411602736-5e9f24e277d0?w=1200&h=400&fit=crop&q=80"
                alt="Cinematic Production Banner"
                width={1200}
                height={400}
                className="relative z-10 w-full h-48 md:h-64 lg:h-72 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

              {/* Film strip overlay effect */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-400 to-gold-600"></div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-400 to-gold-600"></div>
              <div className="absolute left-0 top-2 bottom-2 w-1 bg-repeating-perforations"></div>
              <div className="absolute right-0 top-2 bottom-2 w-1 bg-repeating-perforations"></div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div
          className={`mt-8 max-w-3xl mx-auto ${
            mounted ? "animate-slide-up delay-1200" : "opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Creamos experiencias cinematográficas excepcionales que cautivan
            audiencias y transforman ideas en obras maestras audiovisuales. Cada
            proyecto es una nueva oportunidad para contar historias que perduran
            en el tiempo.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center ${
            mounted ? "animate-slide-up delay-1500" : "opacity-0"
          }`}
        >
          <button
            className="group relative px-8 py-4 bg-gradient-to-r from-secondary-600 to-secondary-500 rounded-lg font-cinematic text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary-500/30"
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="relative z-10">Ver Portafolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            className="group relative px-8 py-4 border-2 border-gold-400 text-gold-400 rounded-lg font-cinematic text-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gold-400 hover:text-black"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="relative z-10">Contactar Ahora</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-20 ${
            mounted ? "animate-slide-up delay-1900" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-gray-400">
            <p className="text-sm font-light mb-4">Descubre más</p>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-gray-400 to-transparent rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-500 to-transparent"></div>
    </section>
  );
}
