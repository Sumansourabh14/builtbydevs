import connectDb from "@/lib/dbConnect";
import Portfolio from "@/models/Portfolio.model";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json(
      { error: "Missing portfolio ID" },
      { status: 400 }
    );
  }

  await connectDb();

  const updated = await Portfolio.findByIdAndUpdate(
    id,
    { approved: true },
    { new: true }
  );

  if (!updated) {
    return NextResponse.json({ error: "Portfolio not found" }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    message: "Portfolio approved successfully!",
    data: updated,
  });
}
