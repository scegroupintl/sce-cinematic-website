"use client";
import React from "react";
import { Oswald } from "next/font/google";
import { BarLoader } from "react-spinners";
import toast from "react-hot-toast";

const cinematicFont = Oswald({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  // Local State
  const [loading, setLoading] = React.useState(false);

  // Constants
  const inputClassNames =
    "w-full px-4 py-3 rounded-lg bg-dark-50/30 border border-secondary-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-secondary-400 transition-all duration-300";

  // Methods
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formInputs = e.target as HTMLFormElement;
    const customerName = formInputs.customerName.value;
    const email = formInputs.email.value;
    const phone = formInputs.phone.value;
    const projectDescription = formInputs.projectDescription.value;
    const message = formInputs.description.value;

    const formData = new FormData();
    formData.append("Nombre", customerName);
    formData.append("Correo Electrónico", email);
    formData.append("Teléfono", phone);
    formData.append("Descripción del Proyecto", projectDescription);
    formData.append("Mensaje", message);
    formData.append("access_key", "d4d2ab83-9ae1-4db5-b9ac-b33e89562cab");

    const promise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    toast.promise(
      promise.then((res) => {
        setLoading(false);

        if (!res.ok) {
          return Promise.reject(new Error("Failed to send message"));
        }
      }),
      {
        loading: "Enviando mensaje...",
        success: "Mensaje enviado con éxito!",
        error: "Error al enviar el mensaje.",
      }
    );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-primary-400 to-primary-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-gold-400">
              Contacto
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Nuestro equipo está listo para materializar tu visión
            cinematográfica. Contáctanos y creemos algo extraordinario juntos.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-elegant font-semibold mb-6 text-white">
                Información de Contacto
              </h3>
              <div className={"space-y-6 " + cinematicFont.className}>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-600/20 rounded-lg flex items-center justify-center group-hover:bg-secondary-600/40 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-secondary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Teléfono</p>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-600/20 rounded-lg flex items-center justify-center group-hover:bg-secondary-600/40 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-secondary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">info@scecinematicgroup.com</p>
                  </div>
                </div>
                {/* <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-600/20 rounded-lg flex items-center justify-center group-hover:bg-secondary-600/40 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-secondary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Ubicación</p>
                    <p className="text-gray-300">
                      Calle Bolivar C/C Cedeño Edificio San Cristobal - Piso 1,
                      Oficina #2
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="bg-dark-50/20 rounded-2xl p-6 border border-secondary-400/20">
              <h4 className="text-xl font-elegant font-semibold mb-4 text-white">
                Horario de Atención
              </h4>
              <div className="space-y-3">
                <div className={cinematicFont.className}>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-400 font-medium">
                      Lunes - Viernes:
                    </span>
                    <span className="text-gray-300">7:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className={cinematicFont.className}>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-400 font-medium">
                      Sábado y Domingo:
                    </span>
                    <span className="text-gray-300">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-50/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-secondary-400/20">
            <BarLoader loading={loading} width={"100%"} color="#0ea5e9" />
            <div className="p-8">
              <h3 className="text-2xl font-elegant font-semibold mb-6 text-center text-white">
                Formulario de Contacto
              </h3>

              <div className={cinematicFont.className}>
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="flex flex-col">
                    <label
                      htmlFor="customerName"
                      className="mb-2 text-sm font-medium text-gray-300"
                    >
                      Nombre y Apellido
                    </label>
                    <input
                      id="customerName"
                      type="text"
                      placeholder="Escribe tu nombre completo"
                      className={inputClassNames}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="mb-2 text-sm font-medium text-gray-300"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className={inputClassNames}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="mb-2 text-sm font-medium text-gray-300"
                    >
                      Número de Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="123-456-7890"
                      className={inputClassNames}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="projectDescription"
                      className="mb-2 text-sm font-medium text-gray-300"
                    >
                      Descripción del Proyecto
                    </label>
                    <input
                      id="projectDescription"
                      type="text"
                      placeholder="Escribe una breve descripción de tu proyecto"
                      className={inputClassNames}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="description"
                      className="mb-2 text-sm font-medium text-gray-300"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="description"
                      placeholder="Cuéntanos más sobre tu proyecto cinematográfico..."
                      rows={4}
                      className={inputClassNames}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-secondary-600 to-secondary-500 px-6 py-4 rounded-lg font-cinematic font-semibold text-white hover:from-secondary-500 hover:to-secondary-400 cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/30"
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
