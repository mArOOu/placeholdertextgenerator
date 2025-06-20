import Image from "next/image";
import Generator from "../components/Generator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <section className="flex-1 w-full flex items-center justify-center">
        <div className="flex flex-1 items-center justify-center min-h-[70vh]">
          <Generator />
        </div>
      </section>
      <Footer />
    </main>
  );
}
