import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = jwt.sign({ admin: true }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });

  const res = NextResponse.json({ success: true });

  res.cookies.set({
    name: "admin_token",
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return res;
}
