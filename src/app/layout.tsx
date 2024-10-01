import type { Metadata } from "next";
import { Inter, Nerko_One } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/utils/theme-provider";
import NavBar from "@/shared/widgets/header/navbar";
import Footer from "@/shared/widgets/footer";


export const metadata: Metadata = {
  title: "",
  description: "",
};

const nerko_one = Nerko_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nerko",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nerko_one.variable} ${poppins.variable}`}>
        <Providers>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
          <Footer/>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
