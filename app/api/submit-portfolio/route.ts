import connectDb from "@/lib/dbConnect";
import Portfolio from "@/models/Portfolio.model";
import { FilterQuery } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    name,
    email,
    url,
    designation,
    stack,
    experience,
    country,
    githubUrl,
  } = await request.json();

  if (!name || !email || !url || !country) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, url, or country." },
      { status: 400 }
    );
  }

  await connectDb();

  const conditions: FilterQuery<typeof Portfolio>[] = [
    { email: email.toLowerCase() },
    { url: url.toLowerCase() },
  ];

  if (githubUrl) {
    conditions.push({ githubUrl: githubUrl.toLowerCase() });
  }

  const existing = await Portfolio.findOne({ $or: conditions });

  if (existing) {
    return NextResponse.json(
      {
        success: false,
        error: "You've already submitted a portfolio.",
      },
      { status: 409 }
    );
  }

  const newPortfolio = await Portfolio.create({
    name,
    email: email.toLowerCase(),
    url: url.toLowerCase(),
    designation,
    stack,
    experience,
    country,
    githubUrl: githubUrl.toLowerCase(),
    approved: false,
  });

  return NextResponse.json({
    success: true,
    message: "Portfolio submitted successfully!",
    data: newPortfolio,
  });
}
