import connectDb from "@/lib/dbConnect";
import Portfolio from "@/models/Portfolio.model";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDb();

  const portfolios = await Portfolio.find({ approved: false });

  return NextResponse.json({
    success: true,
    data: portfolios,
    total: portfolios.length,
  });
}
