import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqib Shabir | Portfolio",
  description: "Aqib Shabir's developer portfolio",
  icons: {
    icon: [
      {
        type: "image/png",
        media: "(prefers-color-scheme: light)",
        url: "/light-favicon.png",
      },
      {
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
        url: "/dark-favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={"!scroll-smooth"}
      suppressHydrationWarning={true}
    >
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-24 sm:pt-28 overflow-x-hidden dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[0] h-[31.25rem] w-1/2 rounded-full blur-[10rem] sm:w-[68.75rem] lg:w-[90.75rem] 2xl:w-[150rem] dark:bg-[#2f273f]"></div>
        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[0] h-[31.25rem] w-1/2 sm:w-[68.75rem] md:w-[68.75rem] lg:w-[90.75rem] 2xl:w-[120rem] rounded-full blur-[10rem] md:left-[-30rem] lg:left-[-40rem] dark:bg-[#211d41]"></div>
        <div className="bg-[#fbe2e3] -z-10 absolute bottom-[0rem] right-[0] h-[31.25rem] w-1/2 rounded-full blur-[10rem] sm:w-[68.75rem] lg:w-[90.75rem] 2xl:w-[150rem] dark:bg-[#2f273f]"></div>
        <div className="bg-[#dbd7fb] -z-10 absolute bottom-[0rem] left-[0] h-[31.25rem] w-1/2 sm:w-[68.75rem] md:w-[68.75rem] lg:w-[90.75rem] 2xl:w-[120rem] rounded-full blur-[10rem] md:left-[-30rem] lg:left-[-40rem] dark:bg-[#211d41]"></div>
        <Providers>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              {children}
              <Toaster position="bottom-right" />
              <Footer />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </Providers>
      </body>
    </html>
  );
}
