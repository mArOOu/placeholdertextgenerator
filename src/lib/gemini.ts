import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function generateFunnyText(wordCount: number): Promise<string> {
  const prompt = `Generate a single block of funny, self-aware, quirky, ironic placeholder text for designers. Tone: meta, playful, and a bit sarcastic. Length: about ${wordCount} words. Examples: 'Wow, you’re really reading this?', 'I’m not real text, but I have feelings too.', 'Don’t judge me, I’m just a mockup.'`;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return text.trim();
}
