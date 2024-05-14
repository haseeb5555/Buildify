import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Providers } from "../(landing_page)/providers";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/backgroundBeams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "main",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={inter.className}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <Navbar />
            <BackgroundBeams />
            <main className="flex flex-row">
              <section className="main-container">
                <div className="w-full ">{children}</div>
              </section>
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
