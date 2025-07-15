import portfolioData from "@/data/portfolioData.json";
import PortfolioCard from "../cards/PortfolioCard";

const PortfolioGrid = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {portfolioData.map((dev, idx) => (
        <PortfolioCard
          key={idx}
          name={dev.name}
          country={dev.country}
          designation={dev.designation}
          experience={dev.experience}
          githubUrl={dev.githubUrl}
          stack={dev.stack}
          url={dev.url}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;
