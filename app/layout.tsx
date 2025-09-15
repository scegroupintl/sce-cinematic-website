import type { Metadata } from "next";
import "./globals.css";
import { Oswald, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/lib/components/Footer";
import { NavBar } from "@/lib/components/NavBar";

const cinematicFont = Oswald({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cinematic",
});

const elegantFont = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-elegant",
});

export const metadata: Metadata = {
  title: "SCE Cinematic Group - Producción Audiovisual",
  description:
    "Grupo cinematográfico profesional especializado en producción audiovisual de alta calidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`scroll-smooth ${cinematicFont.variable} ${elegantFont.variable}`}
    >
      <body
        className={`${cinematicFont.className} tracking-wide bg-primary-500 text-white min-h-screen`}
      >
        <Toaster position="bottom-center" />
        <NavBar />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
