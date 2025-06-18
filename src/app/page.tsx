import Image from "next/image";
import Generator from "../components/Generator";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between px-4 py-8">
      <header className="w-full max-w-2xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Funny Placeholder Text Generator
        </h1>
        {/* Logo can be added here later */}
      </header>
      <section className="flex-1 w-full flex items-center justify-center">
        <Generator />
      </section>
      <footer className="w-full max-w-2xl mx-auto text-center mt-8 text-gray-500 text-sm">
        Made by Marouane – Placeholder Text with Personality™
      </footer>
    </main>
  );
}
