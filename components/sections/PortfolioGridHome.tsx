import React from "react";
import H2 from "../text/H2";
import PortfolioGrid from "../render/PortfolioGrid";

const PortfolioGridHome = () => {
  return (
    <section>
      <H2 title="Portfolios..." />
      <section className="my-8">
        <PortfolioGrid />
      </section>
    </section>
  );
};

export default PortfolioGridHome;
