import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import StoreContextProvider from "@/context/StoreContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });

export const metadata = {
  title: "Food App",
  description: "A simple food delivery app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased bg-white w-[90%] mx-auto`}
      >
        <StoreContextProvider>
          <Navbar />
          {children}
        </StoreContextProvider>
      </body>
    </html>
  );
}
