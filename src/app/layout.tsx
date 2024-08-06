import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ThemeContextProvider } from "@/context/themeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bloged",
  description: "A blog application made with next!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
