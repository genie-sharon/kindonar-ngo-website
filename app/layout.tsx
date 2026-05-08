import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import DonationDrawer from "@/components/DonationDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kindonar | Humanitarian Storytelling",
  description: "Premium humanitarian organization using immersive cinematic storytelling to drive global change.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <DonationDrawer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
