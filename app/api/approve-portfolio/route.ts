import connectDb from "@/lib/dbConnect";
import { sendApprovalSuccessEmail } from "@/lib/sendApprovalSuccessEmail";
import Portfolio from "@/models/Portfolio.model";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
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
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    try {
      await sendApprovalSuccessEmail(updated.email, updated.name);
    } catch (e) {
      console.error("Email failed:", e);
    }

    return NextResponse.json({
      success: true,
      message: "Portfolio approved successfully!",
      data: updated,
    });
  } catch (err) {
    console.error("Error approving portfolio:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
