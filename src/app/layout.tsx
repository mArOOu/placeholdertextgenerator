import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funny Placeholder Text Generator",
  description:
    "Generate quirky, self-aware placeholder text for your mockups using AI.",
  openGraph: {
    title: "Funny Placeholder Text Generator",
    description:
      "Generate quirky, self-aware placeholder text for your mockups using AI.",
    url: "https://your-vercel-app-url.com/",
    siteName: "Funny Placeholder Text Generator",
    images: [
      {
        url: "/file.svg",
        width: 1200,
        height: 630,
        alt: "Funny Placeholder Text Generator Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funny Placeholder Text Generator",
    description:
      "Generate quirky, self-aware placeholder text for your mockups using AI.",
    images: ["/file.svg"],
  },
  metadataBase: new URL("https://your-vercel-app-url.com/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
