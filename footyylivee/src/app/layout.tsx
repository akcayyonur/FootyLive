import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ClientLayout from "./components/ClientLayout"; // Import the client component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Footylive",
  description: "Created by Onur Akçay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="px-2 md:px-16 md:py-2 text-textPrimary">
          <Navbar />
          <section className="flex">
            <Sidebar />
            <ClientLayout>{children}</ClientLayout> {/* Use the client component */}
          </section>
        </main>
      </body>
    </html>
  );
}
