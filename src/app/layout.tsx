import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConsultPro - Business Consulting Services",
  description:
    "Professional business consulting services to help your company grow and succeed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <Main>{children}</Main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
