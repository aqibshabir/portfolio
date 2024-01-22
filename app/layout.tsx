import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqib Shabir | Portfolio",
  description: "Aqib Shabir's developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-24 sm:pt-28 overflow-x-hidden dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] lg:w-[90.75rem] 2xl:w-[150rem]"></div>

        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] sm:w-[68.75rem] md:w-[68.75rem] lg:w-[90.75rem] 2xl:w-[120rem] rounded-full blur-[10rem] md:left-[-30rem] lg:left-[-40rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="bottom-right" />
          <Footer />
        </ActiveSectionContextProvider>

        <ThemeSwitch />
      </body>
    </html>
  );
}
