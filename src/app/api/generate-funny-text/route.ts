import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      error:
        "This endpoint is deprecated. Use /api/placeholder-text-generator instead.",
    },
    { status: 410 }
  );
}
