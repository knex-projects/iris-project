import type { Metadata } from "next";
import { Poppins, Playfair_Display_SC } from "next/font/google";
import "../styles/globals.css";

import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "react-hot-toast";

export const playfairDisplay = Playfair_Display_SC({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iris Comunicação Integrada",
  description: "Landing page da Iris Comunicação Integrada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfairDisplay.className} ${poppins.className}`}>
        <HeroUIProvider>
          <Toaster position="bottom-right" />
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
