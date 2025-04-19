import Header from "@/components/Header";
// import {Image} from "@heroui/react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { playfairDisplay } from "./layout";
import { ExternalLink, Instagram, Linkedin } from "lucide-react";

import ImageHero from "../../public/images/Fundo.png";

import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Header />

      <div className={styles.appHeroContainer}>
        <Image
          src={ImageHero}
          alt="Imagem de fundo."
          className={styles.appHeroImage}
        />
        <h1 className={`${styles.appHeroTitle} ${playfairDisplay.className}`}>
          Somos uma agência de <br /> marketing digital <br /> com DNA{" "}
          <span>100%</span> digital.
        </h1>

        <div className={styles.appHeroButtons}>
          <Button isIconOnly radius="sm">
            <Instagram size={20} />
          </Button>
          <Button radius="sm" endContent={<ExternalLink size={16} />}>
            Conheça mais
          </Button>
          <Button isIconOnly radius="sm">
            <Linkedin size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
