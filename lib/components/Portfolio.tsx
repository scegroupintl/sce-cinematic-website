"use client";
import React, { useRef, useState, useEffect } from "react";

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

// Sample portfolio data - replace with real content
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Campaña Publicitaria Premium",
    category: "Publicidad",
    description:
      "Producción audiovisual de alto impacto para marca de lujo internacional.",
    thumbnail: "/api/placeholder/600/400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    client: "Luxury Brand Corp",
    year: 2024,
  },
  {
    id: 2,
    title: "Documental Corporativo",
    category: "Corporativo",
    description:
      "Historia empresarial contada a través de testimonios y cinematografía profesional.",
    thumbnail: "/api/placeholder/600/400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    client: "Tech Innovation SA",
    year: 2024,
  },
  {
    id: 3,
    title: "Video Musical Artístico",
    category: "Musical",
    description:
      "Dirección creativa y producción de video musical con efectos visuales avanzados.",
    thumbnail: "/api/placeholder/600/400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    client: "Artista Independiente",
    year: 2023,
  },
  {
    id: 4,
    title: "Evento Corporativo",
    category: "Eventos",
    description:
      "Cobertura completa de evento empresarial con múltiples cámaras y edición en vivo.",
    thumbnail: "/api/placeholder/600/400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    client: "Global Conference",
    year: 2023,
  },
  {
    id: 5,
    title: "Cortometraje Narrativo",
    category: "Cinematografía",
    description:
      "Proyecto artístico que explora temas sociales contemporáneos.",
    thumbnail: "/api/placeholder/600/400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    year: 2023,
  },
  {
    id: 6,
    title: "Serie Web Promocional",
    category: "Digital",
    description:
      "Serie de episodios cortos para plataformas digitales y redes sociales.",
    thumbnail: "/api/placeholder/600/400",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    client: "Startup Digital",
    year: 2024,
  },
];

const categories = [
  "Todos",
  "Publicidad",
  "Corporativo",
  "Musical",
  "Eventos",
  "Cinematografía",
  "Digital",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const filteredItems =
    activeCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    // Auto-play videos when they come into view
    const observers: IntersectionObserver[] = [];

    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                video.play().catch(() => {
                  // Handle autoplay restrictions
                });
              } else {
                video.pause();
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(video);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [filteredItems]);

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-cinematic text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-secondary-600 to-secondary-500 text-white shadow-lg scale-105"
                  : "bg-dark-50/30 text-gray-300 hover:bg-dark-50/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-dark-50/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Video Container */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  ref={(el) => {
                    videoRefs.current[item.id] = el;
                  }}
                  src={item.videoUrl}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  poster={item.thumbnail}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => openModal(item)}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
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

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary-600/90 backdrop-blur-sm text-white text-xs font-cinematic rounded-full">
                    {item.category}
                  </span>
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
            className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-cinematic font-medium rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30"
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
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
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
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full aspect-video"
              />
              <div className="p-6">
                <h3 className="text-2xl font-elegant font-bold text-white mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {selectedVideo.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span className="px-3 py-1 bg-secondary-600 text-white rounded-full">
                    {selectedVideo.category}
                  </span>
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
