import connectDb from "@/lib/dbConnect";
import Portfolio from "@/models/Portfolio.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, url, designation, stack, experience, country, githubUrl } =
    await request.json();

  if (!name || !url || !country) {
    return NextResponse.json(
      { error: "Missing name or url or country" },
      { status: 400 }
    );
  }

  await connectDb();

  const newPortfolio = await Portfolio.create({
    name,
    url,
    designation,
    stack,
    experience,
    country,
    githubUrl,
  });

  return NextResponse.json({
    success: true,
    message: "Portfolio submitted successfully!",
    data: newPortfolio,
  });
}
