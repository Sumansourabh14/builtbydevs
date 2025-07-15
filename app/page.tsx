import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import PortfolioGridHome from "@/components/sections/PortfolioGridHome";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="py-8">
        <Hero />
        <Separator />
        <section className="max-w-[1400px] mx-auto py-20">
          <PortfolioGridHome />
        </section>
      </main>
      <Footer />
    </div>
  );
}
