import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import React from "react";

export default function PortfolioLayout({ children }: React.PropsWithChildren) {
  return (
    <section className="py-8 px-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="py-20">
        <section className="max-w-[1400px] mx-auto">{children}</section>
      </main>
      <Footer />
    </section>
  );
}
