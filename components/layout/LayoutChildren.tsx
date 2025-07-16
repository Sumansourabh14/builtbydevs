import React from "react";
import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";

const LayoutChildren = ({ children }: React.PropsWithChildren) => {
  return (
    <section className="py-8 px-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <section className="py-12">
        <section className="max-w-[1400px] mx-auto">{children}</section>
      </section>
      <Footer />
    </section>
  );
};

export default LayoutChildren;
