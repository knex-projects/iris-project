import { Poppins, Playfair_Display_SC } from "next/font/google";

export const playfairDisplay = Playfair_Display_SC({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});