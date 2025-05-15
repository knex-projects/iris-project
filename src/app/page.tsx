import Header from "@/components/Header";
import Image from "next/image";
import { Button } from "@heroui/react";
import { playfairDisplay } from "./layout";
import { ExternalLink, Instagram, Linkedin } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";

import decorLines from "../../public/images/decorLines.png";
import decorTraits from "../../public/images/decorTraits.png";
import scribbleLine from "../../public/images/scribble.svg";
import ImageHero from "../../public/images/Fundo.png";
import logo from "../../public/images/logo.png";

import styles from "@/styles/page.module.css";
import SuccessCaseCard from "@/components/SuccessCaseCard";

export default function Home() {
  // const [emblaRef] = useEmblaCarousel();

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
          <h1 className={`${playfairDisplay.className}`}>
            Casos de sucesso
            <Image
              className={styles.appSuccessStribble}
              src={scribbleLine}
              alt="Risco de decoração do titulo."
            />
          </h1>

          <p>Alguns dos nossos casos projetos realizados.</p>
        </div>

        <div className={`embla ${styles.appSuccessContent}`}>
          <SuccessCaseCard logo={logo} name="IRIS" isActive />
          <SuccessCaseCard logo={logo} name="IRIS" isActive />
          <SuccessCaseCard logo={logo} name="IRIS" isActive />
        </div>

        <p className={styles.appSuccessDescription}>
          A Íris Comunicação Integrada, a agência é especializada em comunicação
          pública, organizacional e corporativa, trabalhando com o conceito de
          comunicação integrada e geração de conteúdo. A Íris valoriza a
          responsabilidade socioambiental e utiliza metodologias participativas
          em seus projetos.
        </p>
      </div>
    </div>
  );
}
