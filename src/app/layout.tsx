import type { Metadata } from "next";
import "../styles/globals.css";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "react-hot-toast";
import { playfairDisplay, poppins } from "@/lib/fonts";

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