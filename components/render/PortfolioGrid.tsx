import { PortfolioProps } from "@/types";
import PortfolioCard from "../cards/PortfolioCard";

export const dynamic = "force-dynamic";

const fetchPortfolios = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-portfolios`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch portfolios");

  const json = await res.json();
  return json.data;
};

const PortfolioGrid = async () => {
  const portfolios = await fetchPortfolios();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {portfolios.map((dev: PortfolioProps) => (
        <PortfolioCard
          _id={dev._id}
          key={dev._id}
          name={dev.name}
          country={dev.country}
          designation={dev.designation}
          experience={dev.experience}
          githubUrl={dev.githubUrl}
          stack={dev.stack}
          url={dev.url}
          approved={dev.approved}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;
