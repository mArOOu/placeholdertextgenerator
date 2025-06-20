// This file is now unused. Use the /api/placeholder-text-generator API route for Gemini requests.

export async function generatePlaceholderText(
  wordCount: number
): Promise<string> {
  const res = await fetch("/api/placeholder-text-generator", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ wordCount }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Unknown error");
  }
  return data.text;
}
