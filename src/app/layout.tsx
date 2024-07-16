import type { Metadata } from "next";
import { Metrophobic } from "next/font/google";
import "./globals.css";

const inter = Metrophobic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloged",
  description: "Write your great ideas and thoughts in the form of blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
