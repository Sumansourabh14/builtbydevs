import PortfolioGrid from "@/components/render/PortfolioGrid";
import H1 from "@/components/text/H1";

const BrowsePortfolios = () => {
  return (
    <div className="px-8 font-[family-name:var(--font-geist-sans)]">
      <H1 title="Portfolios" />
      <section className="py-10">
        <section className="max-w-[1400px] mx-auto">
          <PortfolioGrid />
        </section>
      </section>
    </div>
  );
};

export default BrowsePortfolios;
