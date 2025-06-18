import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { wordCount } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set.");
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not set." },
      { status: 500 }
    );
  }

  try {
    const prompt = `Generate a single block of funny, self-aware, quirky, ironic placeholder text for designers. Tone: meta, playful, and a bit sarcastic. Length: about ${wordCount} words. Examples: 'Wow, you’re really reading this?', 'I’m not real text, but I have feelings too.', 'Don’t judge me, I’m just a mockup.'`;
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      console.error("Gemini API error:", data);
      return NextResponse.json(
        { error: data.error?.message || "Unknown error" },
        { status: 500 }
      );
    }
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    return NextResponse.json({ text: text.trim() });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
