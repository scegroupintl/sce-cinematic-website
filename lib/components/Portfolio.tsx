"use client";
import React, { useState, useEffect } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  client?: string;
  year: number;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "PFJ 2025 - Sesión Venezuela Caracas",
    category: "Eventos Religiosos",
    description:
      "Producción cinematográfica profesional del evento 'Para la Fortaleza de la Juventud' en Venezuela, capturando testimonios inspiradores, discursos edificantes y momentos especiales de conexión espiritual entre los jóvenes de la región Caribe.",
    thumbnail: "https://img.youtube.com/vi/ktaQZ9kL6p0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/ktaQZ9kL6p0",
    client: "La Iglesia de Jesucristo de los Santos de los Últimos Días",
    year: 2025,
  },
  {
    id: 2,
    title: "PFJ 2025 - Sesión Santiago",
    category: "Eventos Religiosos",
    description:
      "Producción cinematográfica profesional del evento 'Para la Fortaleza de la Juventud' en Venezuela, capturando testimonios inspiradores, discursos edificantes y momentos especiales de conexión espiritual entre los jóvenes de la región Caribe.",
    thumbnail: "https://img.youtube.com/vi/i31-SK60yUI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/i31-SK60yUI",
    client: "La Iglesia de Jesucristo de los Santos de los Últimos Días",
    year: 2025,
  },
  {
    id: 3,
    title: "PFJ 2025 - Sesión Santo Domingo Oeste",
    category: "Eventos Religiosos",
    description:
      "Producción cinematográfica profesional del evento 'Para la Fortaleza de la Juventud' en Venezuela, capturando testimonios inspiradores, discursos edificantes y momentos especiales de conexión espiritual entre los jóvenes de la región Caribe.",
    thumbnail: "https://img.youtube.com/vi/R8dR_T0hAxw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/R8dR_T0hAxw",
    client: "La Iglesia de Jesucristo de los Santos de los Últimos Días",
    year: 2025,
  },
  {
    id: 4,
    title: "PFJ 2025 - Sesión Santo Domingo Este",
    category: "Eventos Religiosos",
    description:
      "Producción cinematográfica profesional del evento 'Para la Fortaleza de la Juventud' en Venezuela, capturando testimonios inspiradores, discursos edificantes y momentos especiales de conexión espiritual entre los jóvenes de la región Caribe.",
    thumbnail: "https://img.youtube.com/vi/3ciCg9__S4I/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/3ciCg9__S4I",
    client: "La Iglesia de Jesucristo de los Santos de los Últimos Días",
    year: 2025,
  },
  {
    id: 5,
    title: "PFJ 2025 - Sesión Puerto Rico",
    category: "Eventos Religiosos",
    description:
      "Producción cinematográfica profesional del evento 'Para la Fortaleza de la Juventud' en Venezuela, capturando testimonios inspiradores, discursos edificantes y momentos especiales de conexión espiritual entre los jóvenes de la región Caribe.",
    thumbnail: "https://img.youtube.com/vi/7R8ls6wrHJg/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/7R8ls6wrHJg",
    client: "La Iglesia de Jesucristo de los Santos de los Últimos Días",
    year: 2025,
  },
  {
    id: 6,
    title: "PFJ 2025 - Sesión Venezuela Caracas",
    category: "Eventos Religiosos",
    description:
      "Producción cinematográfica profesional del evento 'Para la Fortaleza de la Juventud' en Venezuela, capturando testimonios inspiradores, discursos edificantes y momentos especiales de conexión espiritual entre los jóvenes de la región Caribe.",
    thumbnail: "https://img.youtube.com/vi/ktaQZ9kL6p0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/ktaQZ9kL6p0",
    client: "La Iglesia de Jesucristo de los Santos de los Últimos Días",
    year: 2025,
  },
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: PortfolioItem) => {
    setSelectedVideo(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-primary-500 to-primary-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-white mb-6">
            Nuestro{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-gold-400">
              Portafolio
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Explora nuestra colección de producciones cinematográficas que han
            cautivado audiencias y superado expectativas.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-dark-50/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Video Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => openModal(item)}
                    className="w-16 h-16 bg-white/20 cursor-pointer backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-elegant font-semibold text-white mb-2 group-hover:text-secondary-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500">
                  {item.client && <span>{item.client}</span>}
                  <span>{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            ¿Listo para crear tu próximo proyecto cinematográfico?
          </p>
          <button
            className="px-8 py-4 bg-gradient-to-r cursor-pointer from-gold-600 to-gold-500 text-black font-cinematic font-medium rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Trabajemos Juntos
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 cursor-pointer text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="bg-dark-50 rounded-2xl overflow-hidden">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full aspect-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="p-6">
                <h3 className="text-2xl font-elegant font-bold text-white mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {selectedVideo.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <div className="flex gap-4">
                    {selectedVideo.client && (
                      <span>Cliente: {selectedVideo.client}</span>
                    )}
                    <span>Año: {selectedVideo.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
