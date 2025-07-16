import { PortfolioProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const PortfolioCard = ({
  name,
  url,
  designation,
  stack,
  experience,
  country,
  githubUrl,
}: PortfolioProps) => {
  return (
    <Card className="w-full max-w-md mx-auto hover:shadow-lg transition-shadow pt-0">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-md group">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <Image
            src={`https://api.microlink.io/?url=${encodeURIComponent(
              url
            )}&screenshot=true&meta=false&embed=screenshot.url`}
            alt={`Screenshot of ${name}'s portfolio`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      <CardHeader>
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{designation}</p>
      </CardHeader>
      <CardContent className="text-sm space-y-2">
        {!stack.includes("") && (
          <p>
            <strong>Stack:</strong> {stack.join(", ")}
          </p>
        )}
        {experience && (
          <p>
            <strong>Experience:</strong> {experience}{" "}
            {experience === 1 ? "year" : "years"}
          </p>
        )}
        {country && (
          <p>
            <strong>Country:</strong> {country}
          </p>
        )}
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-sm"
        >
          GitHub
        </Link>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
