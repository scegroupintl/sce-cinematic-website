"use client";
import React from "react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-primary-500">
      {/* Hero Section */}
      <section className="relative py-32 bg-hero-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-elegant font-bold text-white mb-6">
              Sobre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-gold-400">
                Nosotros
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
              Somos artistas visuales comprometidos con la excelencia
              cinematográfica
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-500 to-transparent"></div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-b from-primary-500 to-primary-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  <span className="text-secondary-400 font-semibold">
                    SCE Cinematic Group
                  </span>{" "}
                  nació de la pasión por contar historias que trascienden la
                  pantalla. Fundada por un equipo de visionarios creativos,
                  nuestra misión es transformar ideas en experiencias
                  cinematográficas que cautiven y emocionen.
                </p>
                <p>
                  Con años de experiencia en la industria audiovisual, hemos
                  desarrollado un enfoque único que combina técnica avanzada con
                  narrativa emotiva, creando producciones que no solo informan,
                  sino que inspiran y conectan con las audiencias a nivel
                  profundo.
                </p>
                <p>
                  Cada proyecto es una oportunidad para superar límites
                  creativos y establecer nuevos estándares en la producción
                  audiovisual, siempre manteniendo nuestro compromiso con la
                  calidad excepcional y la innovación constante.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Image Placeholder */}
              <div className="relative flex justify-center items-center mb-3">
                <div className="w-[500px] h-80 bg-gray-600/30 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-secondary-400/20">
                  <div className="text-center space-y-4">
                    <svg
                      className="w-16 h-16 mx-auto text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="text-gray-400 text-lg font-cinematic">
                      500px × 320px
                    </div>
                    <div className="text-gray-500 text-sm">
                      Imagen del Equipo
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-dark-50/20 rounded-2xl py-6 border border-secondary-400/20">
                <div className="grid grid-cols-2 gap-12 text-center">
                  <div className="space-y-3">
                    <div className="text-5xl md:text-6xl font-bold text-secondary-400">
                      5+
                    </div>
                    <div className="text-gray-300 text-base font-cinematic">
                      Años de Experiencia
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-5xl md:text-6xl font-bold text-gold-400">
                      50+
                    </div>
                    <div className="text-gray-300 text-base font-cinematic">
                      Proyectos Realizados
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-primary-400 to-primary-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Los principios que guían cada decisión en nuestras producciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark-50/20 rounded-2xl p-8 border border-secondary-400/20 hover:bg-dark-50/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-secondary-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-600/40 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-elegant font-semibold text-white mb-4">
                Creatividad
              </h3>
              <p className="text-gray-300">
                Innovamos constantemente para crear contenido visual único que
                supere expectativas y establezca nuevas tendencias.
              </p>
            </div>

            <div className="bg-dark-50/20 rounded-2xl p-8 border border-secondary-400/20 hover:bg-dark-50/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-600/40 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-elegant font-semibold text-white mb-4">
                Excelencia
              </h3>
              <p className="text-gray-300">
                Cada proyecto recibe nuestra máxima dedicación, asegurando
                resultados de la más alta calidad profesional.
              </p>
            </div>

            <div className="bg-dark-50/20 rounded-2xl p-8 border border-secondary-400/20 hover:bg-dark-50/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-secondary-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-600/40 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-elegant font-semibold text-white mb-4">
                Colaboración
              </h3>
              <p className="text-gray-300">
                Trabajamos de cerca con nuestros clientes, convirtiendo sus
                visiones en realidades cinematográficas impactantes.
              </p>
            </div>

            <div className="bg-dark-50/20 rounded-2xl p-8 border border-secondary-400/20 hover:bg-dark-50/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-600/40 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-elegant font-semibold text-white mb-4">
                Innovación
              </h3>
              <p className="text-gray-300">
                Adoptamos las últimas tecnologías y técnicas cinematográficas
                para mantener nuestras producciones a la vanguardia.
              </p>
            </div>

            <div className="bg-dark-50/20 rounded-2xl p-8 border border-secondary-400/20 hover:bg-dark-50/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-secondary-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-600/40 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-elegant font-semibold text-white mb-4">
                Pasión
              </h3>
              <p className="text-gray-300">
                Amamos lo que hacemos, y esa pasión se refleja en cada frame,
                cada toma y cada historia que contamos.
              </p>
            </div>

            <div className="bg-dark-50/20 rounded-2xl p-8 border border-secondary-400/20 hover:bg-dark-50/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gold-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-600/40 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-elegant font-semibold text-white mb-4">
                Puntualidad
              </h3>
              <p className="text-gray-300">
                Respetamos los tiempos de entrega y nos comprometemos a cumplir
                con cada deadline acordado con nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-primary-300 to-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-elegant font-bold text-white mb-6">
            ¿Listo para Crear Algo Extraordinario?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos transformar tu visión en una
            obra maestra cinematográfica.
          </p>
          <button
            className="px-8 py-4 bg-gradient-to-r cursor-pointer from-secondary-600 to-secondary-500 text-white font-cinematic font-medium rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/30"
            onClick={() => (window.location.href = "/#contact")}
          >
            Contactar Ahora
          </button>
        </div>
      </section>
    </main>
  );
}
