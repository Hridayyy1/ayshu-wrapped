import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayshu Wrapped 2026 ❤️",
  description: "A year of conversations, inside jokes, late night talks, and my favorite person.",
  openGraph: {
    title: "Ayshu Wrapped 2026 ❤️",
    description: "A year of conversations, inside jokes, late night talks, and my favorite person.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}
