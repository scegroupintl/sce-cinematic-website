"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-600 border-t border-secondary-400/20 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-elegant font-bold text-white">
              SCE Cinematic Group
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Producción audiovisual de excelencia que transforma visiones en
              experiencias cinematográficas inolvidables.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/SCEinternational/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-600/20 rounded-lg flex items-center justify-center hover:bg-secondary-600/40 transition-colors duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-gray-300 group-hover:text-secondary-400"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sce_international/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-600/20 rounded-lg flex items-center justify-center hover:bg-secondary-600/40 transition-colors duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-gray-300 group-hover:text-secondary-400"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-elegant font-bold text-white">
              Contacto
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-secondary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:+13852541415"
                  className="hover:text-secondary-400 transition-colors duration-300"
                >
                  +1 (385) 254-1415
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-secondary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:info@scecinematicgroup.com"
                  className="hover:text-secondary-400 transition-colors duration-300"
                >
                  info@scecinematicgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-secondary-400 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-relaxed">
                  Calle Bolivar C/C Cedeño Edificio San Cristobal - Piso 1,
                  Oficina #2
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-elegant font-bold text-white">
              Servicios
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-secondary-400 transition-colors duration-300 cursor-pointer">
                Campañas Publicitarias
              </li>
              <li className="hover:text-secondary-400 transition-colors duration-300 cursor-pointer">
                Videos Corporativos
              </li>
              <li className="hover:text-secondary-400 transition-colors duration-300 cursor-pointer">
                Videos Musicales
              </li>
              <li className="hover:text-secondary-400 transition-colors duration-300 cursor-pointer">
                Cobertura de Eventos
              </li>
              <li className="hover:text-secondary-400 transition-colors duration-300 cursor-pointer">
                Documentales
              </li>
              <li className="hover:text-secondary-400 transition-colors duration-300 cursor-pointer">
                Contenido Digital
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-400/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SCE Cinematic Group. Todos los
              derechos reservados.
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <span className="text-gray-400 text-sm">
                Creando experiencias cinematográficas extraordinarias
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
