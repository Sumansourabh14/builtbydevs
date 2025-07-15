import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import PortfolioGrid from "@/components/render/PortfolioGrid";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="py-8">
        <Hero />
        <section className="max-w-[1400px] mx-auto">
          <PortfolioGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}
