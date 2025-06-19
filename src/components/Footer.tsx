import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto text-center mt-8 text-gray-500 text-sm">
      Made by{" "}
      <Link
        href={"https://github.com/maroou"}
        className="underline"
        target="_blank">
        Marouane
      </Link>{" "}
      – Placeholder Text with Personality™
    </footer>
  );
}

export default Footer;
