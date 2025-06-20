import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="w-full max-w-2xl mx-auto text-center mb-8 flex justify-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-2"></h1>
      <Image
        src={"/logo.png"}
        width={"200"}
        height={"10"}
        alt="Placeholder text with personality"
        className="flex mt-4"></Image>
    </header>
  );
}

export default Header;
