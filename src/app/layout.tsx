import type { Metadata } from "next";
import { Poppins, Playfair_Display_SC } from "next/font/google";
import "../styles/globals.css";

import { HeroUIProvider } from "@heroui/react";

const playfairDisplay = Playfair_Display_SC({
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
  title: "Íris Comunicação Integrada",
  description: "Landing page da Íris Comunicação Integrada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfairDisplay.className} ${poppins.className}`}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
