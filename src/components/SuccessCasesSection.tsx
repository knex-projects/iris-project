// src/components/SuccessCasesSection.tsx

"use client"; // Marcando este componente como de cliente

import { useState } from "react";
import Image from "next/image";

// Imports que esta seção precisa
import styles from "@/styles/page.module.css";
import SuccessCaseCard, { SucessCaseProps } from "@/components/SuccessCaseCard";
import { AnimatedBoxLeft } from "@/components/animations/leftAnimate";
import scribbleLine from "../../public/images/scribble.svg";
import scribbleLine2 from "../../public/images/scribbleLine2.svg";
import olhos from "../../public/images/olhos.svg";
import divinoNutsLogo from "../../public/images/portfolio/DIVINO NUTS.png";
import endipeLogo from "../../public/images/portfolio/ENDIPE.png";
import visuLogo from "../../public/images/portfolio/VISU.png";

// Dados dos casos de sucesso
const successCasesData = [
  {
    logo: divinoNutsLogo,
    name: "Divino Nuts",
    description:
      "A Divino Nuts é uma empresa focada em produtos naturais e saudáveis. Nosso trabalho envolveu a criação de uma identidade visual forte e uma estratégia de conteúdo digital que ressoasse com seu público-alvo.",
  },
  {
    logo: endipeLogo,
    name: "ENDIPE",
    description:
      "Em Novembro de 2024, a Iris Comunicação foi responsável por fazer a mídia e cobertura do vigésimo segundo Encontro Nacional de Didática e Práticas de Ensino. Com uma entrega de 200 stories e mais de 1000 fotos ao longo dos 05 dias de evento, o Instagram do ENDIPE alcançou +200 mil impressões durante aquela semana.",
  },
  {
    logo: visuLogo,
    name: "Visu",
    description:
      "Parceira da Iris por +1 ano, a Visu ascendeu no mercado paraibano entre os anos de 2023 e 2024. Durante esse período, a Iris fez toda a produção de conteúdo, captação de fotos, e mídia gráfica da empresa, além do emblemático rebranding no ano de 2023.",
  },
];

// O componente precisa receber a classe da fonte como uma prop
interface SuccessCasesSectionProps {
  fontClassName: string;
}

export default function SuccessCasesSection({
  fontClassName,
}: SuccessCasesSectionProps) {
  const [activeCase, setActiveCase] = useState<SucessCaseProps | null>(null);

  const defaultDescriptionSuccessCase =
    "A Iris Comunicação Integrada é uma agência especializada em comunicação pública, organizacional e corporativa, trabalhando com o conceito de comunicação integrada e geração de conteúdo. A Iris valoriza a responsabilidade socioambiental e utiliza metodologias participativas em seus projetos.";

  const handleSuccessCardClick = (caseData: SucessCaseProps) => {
    console.log("aqui");
    if (activeCase && activeCase.name === caseData.name) {
      setActiveCase(null);
      console.log("teste");
    } else {
      setActiveCase(caseData);
    }
  };

  return (
    <div id="Cases" className={styles.appSuccessContainer}>
      <h1
        className={`${fontClassName} ${styles.appSuccessTitle2} max-md:w-[263px] grid`}
      >
        Nossos Casos
        <Image
          className={styles.appSuccessStribble}
          src={scribbleLine}
          alt="Risco de decoração do titulo."
        />
      </h1>
      <div className={styles.appSuccessTitle}>
        <h1 className={fontClassName}>
          Casos de sucesso
          <Image
            className={styles.appSuccessStribble2}
            src={scribbleLine}
            alt="Risco de decoração do titulo."
          />
          <Image
            className={styles.appSuccessStribble2}
            src={scribbleLine2}
            alt="Risco de decoração do titulo."
          />
          <Image
            src={olhos}
            alt="Imagem de fundo."
            className={styles.appSuccessImage}
          />
        </h1>
        <p>Alguns dos nossos casos projetos realizados.</p>
      </div>

      <AnimatedBoxLeft className={`embla ${styles.appSuccessContent}`}>
        {successCasesData.map((caseItem, index) => (
          <SuccessCaseCard
            key={index}
            logo={caseItem.logo}
            name={caseItem.name}
            onClick={() => handleSuccessCardClick(caseItem as SucessCaseProps)}
            isActive={!!(activeCase && activeCase.name === caseItem.name)}
          />
        ))}
      </AnimatedBoxLeft>

      <p className={styles.appSuccessDescription}>
        {activeCase ? activeCase.description : defaultDescriptionSuccessCase}
      </p>
    </div>
  );
}
