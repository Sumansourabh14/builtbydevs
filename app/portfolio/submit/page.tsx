import PortfolioForm from "@/components/forms/PortfolioForm";
import H1 from "@/components/text/H1";

const SubmitPortfolio = () => {
  return (
    <section className="px-8 font-[family-name:var(--font-geist-sans)]">
      <H1 title="Submit Portfolio" />
      <section className="py-10">
        <section className="max-w-[1400px] mx-auto">
          <PortfolioForm />
        </section>
      </section>
    </section>
  );
};

export default SubmitPortfolio;
