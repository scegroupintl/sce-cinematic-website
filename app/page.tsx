import Hero from "@/lib/components/Hero";
import Portfolio from "@/lib/components/Portfolio";
import Contact from "@/lib/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-500">
      <Hero />
      <Portfolio />
      <Contact />
    </main>
  );
}
