import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="py-20 2xl:py-40 px-8">
      <section className="max-w-[820px] mx-auto space-y-8 text-center">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance">
          The Home for Developer Portfolios
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Discover and showcase real-world developer portfolios from around the
          globe. Filter by stack, style, or country — or share your own work
          with the world.
        </p>
        <Button asChild className="py-8 px-12">
          <Link href="/portfolio/submit" className="text-xl">
            Submit your portfolio
          </Link>
        </Button>
        <div className="my-[-16px]">
          <Link href="/portfolio/browse" className="underline">
            Or browse portfolios
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Hero;
