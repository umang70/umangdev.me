import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    name?: string;
    email?: string;
    message?: string;
    website?: string;
  } | null;

  if (!body) return NextResponse.json({ ok: false }, { status: 400 });

  // honeypot check
  if (body.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // Log for now; replace with integration (email, db, etc.)
  console.log("[prasanbora] Contact message received:", {
    name: body.name,
    email: body.email,
    message: body.message,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
