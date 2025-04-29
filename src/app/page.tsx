import Header from "@/components/Header";
// import {Image} from "@heroui/react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { playfairDisplay } from "./layout";
import { ExternalLink, Instagram, Linkedin } from "lucide-react";

import decorLines from "../../public/images/decorLines.png";
import decorTraits from "../../public/images/decorTraits.png";
import ImageHero from "../../public/images/Fundo.png";

import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Header />

      {/* Hero */}
      <div className={styles.appHeroContainer}>
        <Image
          src={ImageHero}
          alt="Imagem de fundo."
          className={styles.appHeroImage}
        />
        <h1 className={`${styles.appHeroTitle} ${playfairDisplay.className}`}>
          <div className={styles.heroDecorWrapper}>
            <Image
              src={decorTraits}
              alt="Traço decorativo"
              className={styles.heroDecorImg}
            />
            <span className={styles.heroDecorText}>Somos uma agência de</span>
          </div>
          <br />
          <div className={styles.heroUnderlineWrapper}>
            <span className={styles.heroUnderlineText}>MARKETING DIGITAL</span>
            <Image
              src={decorLines}
              alt="Traço decorativo"
              className={styles.heroUnderlineImg}
            />
          </div>
          <br />
          com DNA <span className={styles.heroHighlight}>100%</span>{" "}
          <span className={styles.heroDecoration}>
            DIGITAL.
            <Image
              src={decorLines}
              alt="Traço decorativo"
              className={styles.heroLineBelow}
            />
          </span>
        </h1>

        <div className={styles.appHeroButtons}>
          <Button isIconOnly radius="sm">
            <Instagram size={24} />
          </Button>
          <Button radius="sm" endContent={<ExternalLink size={18} />}>
            Conheça mais
          </Button>
          <Button isIconOnly radius="sm">
            <Linkedin size={24} />
          </Button>
        </div>
      </div>

      {/* Success stories */}
      <div className={styles.appSuccessContainer}>
        <div className={styles.appSuccessTitle}>
          <h1>Casos de sucesso</h1>
          <p>Alguns dos nossos casos projetos realizados.</p>
        </div>

        <div className={styles.appSuccessContent}></div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aut
          sint dolor magnam suscipit aperiam fugit, deserunt voluptatibus
          corporis saepe distinctio aliquid tempore quaerat excepturi, iure
          nobis perferendis quas numquam?
        </p>
      </div>
    </div>
  );
}
