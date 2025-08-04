import Header from "@/components/Header";
import Image from "next/image";
import { Button } from "@heroui/react";
import { playfairDisplay } from "./layout";
import {
  Calendar,
  Camera,
  ExternalLink,
  FileSignature,
  FileText,
  Flame,
  IdCard,
  Instagram,
  Linkedin,
  MessageCircleMore,
  PlayCircle,
  Smartphone,
  Stethoscope,
  UserCheck,
} from "lucide-react";

import StribbleYellow from "../../public/images/StribbleYellow.svg";
import scribbleLine2 from "../../public/images/scribbleLine2.svg";
import decorLines from "../../public/images/decorLines.png";
import decorTraits from "../../public/images/decorTraits.png";
import scribbleLine from "../../public/images/scribble.svg";
import ImageHero from "../../public/images/Fundo.svg";
import logo from "../../public/images/logo.png";
import yellowLine from "../../public/images/yellowLine.svg";
import orangeLine from "../../public/images/orangeLine.svg";
import pinkLine from "../../public/images/pinkLine.svg";
import megaphone from "../../public/images/megaphone.svg";
import BrilhoFundo from "../../public/images/formBrilhoFundo.svg";
import BrilhoTopo from "../../public/images/formBrilhoTopo.svg";
import secadorBrilhoDireita from "../../public/images/secadorBrilhoDireita.svg";
import secadorBrilhoEsquerda from "../../public/images/secadorBrilhoEsquerda.svg";
import blur from "../../public/images/blur.svg";
import ImageHeroMobile from "../../public/fundoMobile.svg";
import camera from "../../public/images/camera.svg";
import arrow from "../../public/images/arrow.svg";
import arrowCurved from "../../public/images/arrowCurved.svg";
import styles from "@/styles/page.module.css";
import SuccessCaseCard from "@/components/SuccessCaseCard";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { AnimatedBoxDown } from "@/components/animations/downAnimation";
import { AnimatedBoxLeft } from "@/components/animations/leftAnimate";
import { AnimatedBoxRight } from "@/components/animations/rightAnimate";
import { AnimatedBoxEnter } from "@/components/animations/enterAnimation";
import laptop from "../../public/images/laptop.svg";
import phone from "../../public/images/phone.svg";
import olhos from "../../public/images/olhos.svg";
import novaPaylogo from "../../public/images/novaPayLogo.svg";
import greenSolutionLogo from "../../public/images/GreenSolutionsLogo.svg";
import ProcessStepIcon from "../../public/images/ProcessStepIcon.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Header />

      {/* Hero */}

      <div id="ConheçaaÍris" className={styles.appHeroContainer}>
        <Image
          src={ImageHero}
          alt="Imagem de fundo."
          className={styles.appHeroImage}
        />
        <Image
          src={ImageHeroMobile}
          alt="Imagem de fundo."
          className={styles.appHeroImage2}
        />
        <AnimatedBoxDown className={styles.appHeroContainer}>
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
              <span className={styles.heroUnderlineText}>
                MARKETING DIGITAL
              </span>
              <Image
                src={decorLines}
                alt="Traço decorativo"
                className={styles.heroUnderlineImg}
              />
            </div>
            <br />
            com DNA <span className={styles.heroHighlight}>100%</span>{" "}
            <span className={styles.heroDecoration}>
              INOVADOR.
              <Image
                src={decorLines}
                alt="Traço decorativo"
                className={styles.heroLineBelow}
              />
            </span>
          </h1>

          <div className={styles.appHeroButtons}>
            <Link
              href={"https://www.instagram.com/ejiriscomunicacao/"}
              target="_blank"
              className={styles.iconButton}
            >
              <span className={styles.iconContent}>
                <span className={styles.iconFade}>
                  <Instagram size={24} />
                </span>
                <span className={styles.iconLabel}>Instagram</span>
              </span>
            </Link>
            <Button
              className={styles.appHeroButtonText}
              radius="sm"
              endContent={<ExternalLink size={18} />}
            ></Button>

            <Link
              href={"https://www.linkedin.com/company/iriscomunicacao/"}
              target="_blank"
              className={styles.iconButton}
            >
              <span className={styles.iconContent}>
                <span className={styles.iconFade}>
                  <Linkedin size={24} />
                </span>
                <span className={styles.iconLabel}>LinkedIn</span>
              </span>
            </Link>
          </div>
        </AnimatedBoxDown>
      </div>

      {/* Sobre nós */}
      {/* Success stories */}
      <div id="Cases" className={styles.appSuccessContainer}>
        <h1
          className={`${playfairDisplay.className} ${styles.appSuccessTitle2}  max-md:w-[263px] grid `}
        >
          Nossos Casos
          <Image
            className={styles.appSuccessStribble}
            src={scribbleLine}
            alt="Risco de decoração do titulo."
          />
        </h1>
        <div className={styles.appSuccessTitle}>
          <h1 className={`${playfairDisplay.className}`}>
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
          <SuccessCaseCard logo={novaPaylogo} name="IRIS" isActive />
          <SuccessCaseCard logo={greenSolutionLogo} name="IRIS" isActive />
          <SuccessCaseCard logo={logo} name="IRIS" isActive />
        </AnimatedBoxLeft>

        <p className={styles.appSuccessDescription}>
          A Iris Comunicação Integrada, a agência é especializada em comunicação
          pública, organizacional e corporativa, trabalhando com o conceito de
          comunicação integrada e geração de conteúdo. A Iris valoriza a
          responsabilidade socioambiental e utiliza metodologias participativas
          em seus projetos.
        </p>
      </div>

      {/* Soluções */}
      <section id="Soluções" className={styles.solucoesContainer}>
        <h2
          className={`${styles.SolucoesSubTitulo}  ${playfairDisplay.className}`}
        >
          Serviços que proporcionamos.{" "}
        </h2>
        <h1
          className={`${styles.SolucoesTitulo}  ${playfairDisplay.className}`}
        >
          <Image
            src={megaphone}
            width={140}
            height={140}
            alt="megaphone"
            className={styles.megaphoneImage}
          />
          Nossas Soluções
          <div className={styles.SolucoesTituloImage}>
            {" "}
            <Image
              fill
              src={yellowLine}
              alt="yellowLine"
              sizes="(min-width: 490px) 26vw, 9vw"
            />
          </div>
          <Image
            className={styles.SolucoesTituloStribble}
            src={StribbleYellow}
            alt="yellowLine"
            sizes="(min-width: 490px) 26vw, 9vw"
          />
        </h1>

        <AnimatedBoxRight className={styles.solucoesContainerCard}>
          <div className={styles.solucoesCard}>
            <Calendar color="#FCC837" size={40} />
            <h1 className={styles.soluçoesCardTitulo}>Cobertura de Evento</h1>
            <div className={styles.solucoesLine}></div>
            <h2 className={styles.soluçoesCardText}>
              Captamos cada momento de um jeito que faz a diferença, em tempo
              real para não perder nenhum detalhe do seu momento especial.
            </h2>
          </div>
          <div className={styles.solucoesCard}>
            <MessageCircleMore color="#FCC837" size={40} />
            <h1 className={styles.soluçoesCardTitulo}>
              Consultoria em comunicação
            </h1>
            <div className={styles.solucoesLine}></div>
            <h2 className={styles.soluçoesCardText}>
              Quer se comunicar melhor com seu público? A gente te ajuda! Com
              estratégia e um olhar personalizado, apontamos caminhos para
              fortalecer a sua marca!
            </h2>
          </div>
          <div className={styles.solucoesCard}>
            <>
              <Camera color="#FCC837" size={40} />
              <h1 className={styles.soluçoesCardTitulo}>
                Captação de Fotos e Vídeos
              </h1>
            </>
            <div className={styles.solucoesLine}></div>
            <h2 className={styles.soluçoesCardText}>
              Fotos e vídeos que contam sua história de verdade. Seja para sua
              marca, ou para um momento pessoal, estamos à disposição!
            </h2>
          </div>
          <div className={styles.solucoesCard}>
            <></>
            <IdCard color="#FCC837" size={40} />
            <h1 className={styles.soluçoesCardTitulo}>Identidade Visual</h1>
            <div className={styles.solucoesLine}></div>
            <h2 className={styles.soluçoesCardText}>
              Sua marca merece um visual único e marcante. Se destacar e ser
              reconhecido no mercado é o objetivo central aqui!
            </h2>
          </div>
          <div className={styles.solucoesCard}>
            <Smartphone color="#FCC837" size={40} />
            <h1 className={styles.soluçoesCardTitulo}>
              Conteúdo para as redes sociais
            </h1>
            <div className={styles.solucoesLine}></div>
            <h2 className={styles.soluçoesCardText}>
              Estar nas redes é mais do que postar: é construir presença. Aqui
              vamos montar estratégias voltadas especialmente para sua empresa
              se destacar no mercado!
            </h2>
          </div>
        </AnimatedBoxRight>
      </section>

      {/*Nossos processos*/}

      <section id="Processos" className={styles.processContainer}>
        <div className={styles.processTitle}>
          <h1 className={`${playfairDisplay.className}`}>
            Nossos processos
            <Image
              className={styles.appProcessStribble}
              src={orangeLine}
              alt="Risco de decoração do titulo."
            />
          </h1>
          <p>Alguns dos nossos casos projetos realizados.</p>
        </div>
        {/* Monta o grid*/}
        <div className={styles.processGrid}>
          <div className={styles.processColumn}>
            {/* Etapa Inicial */}

            <AnimatedBoxEnter className={styles.cardProcess} delayTime={0}>
              <h2>Etapa Inicial</h2>
              <Image
                className={styles.ProcessStepIcon}
                src={ProcessStepIcon}
                alt="Seta curva decorativa"
              />
              <div className={styles.stepContainer}>
                <div className={styles.step}>
                  <PlayCircle className={styles.stepIcon} />
                  <h3 className={styles.stepTitle}>Primeiro Contato</h3>
                  <p className={styles.stepDescription}>
                    Vamos ter nossa primeira conversa via mensagem ou ligação!
                  </p>
                </div>
                <div className={styles.step}>
                  <Stethoscope className={styles.stepIcon} />
                  <h3 className={styles.stepTitle}>Reunião de Diagnóstico</h3>
                  <p className={styles.stepDescription}>
                    Aqui vamos entender com mais precisão como podemos efetuar
                    nossa parceria!
                  </p>
                </div>
              </div>
            </AnimatedBoxEnter>
            {/* Etapa Iris */}
            <AnimatedBoxEnter className={styles.cardProcess} delayTime={1}>
              <h2>Etapa Iris</h2>
              <Image
                className={styles.ProcessStepIcon}
                src={ProcessStepIcon}
                alt="Seta curva decorativa"
              />
              <div className={styles.stepContainer}>
                <div className={styles.step}>
                  <Flame className={styles.stepIcon} />
                  <h3 className={styles.stepTitle}>Execução</h3>
                  <p className={styles.stepDescription}>
                    Colocar a mão na massa é o que amamos fazer!
                  </p>
                </div>
                <div className={styles.step}>
                  <UserCheck className={styles.stepIcon} />
                  <h3 className={styles.stepTitle}>Acompanhamento</h3>
                  <p className={styles.stepDescription}>
                    Estaremos em contato durante todo o projeto para te entregar
                    nossa qualidade de ponta!
                  </p>
                </div>
              </div>
            </AnimatedBoxEnter>
          </div>
          <div className={styles.processArrows}>
            <Image
              className={styles.arrows}
              src={arrowCurved}
              alt="Seta curva decorativa"
            />
            <Image
              className={styles.arrows}
              src={arrow}
              alt="Seta decorativa"
            />
          </div>
          {/* Etapa Contratual */}
          <AnimatedBoxEnter
            className={styles.processColumnRight}
            delayTime={0.5}
          >
            <Image
              className={styles.processCamera}
              src={camera}
              width={340}
              height={340}
              alt="Seta decorativa"
            />
            <div className={styles.cardProcess}>
              <h2>Etapa Contratual</h2>
              <Image
                className={styles.ProcessStepIcon}
                src={ProcessStepIcon}
                alt="Seta curva decorativa"
              />
              <div className={styles.stepContainer}>
                <div className={styles.step}>
                  <FileSignature className={styles.stepIcon} />
                  <h3 className={styles.stepTitle}>Proposta</h3>
                  <p className={styles.stepDescription}>
                    Hora de apresentar uma proposta exclusiva para você com os
                    nossos serviços!
                  </p>
                </div>
                <div className={styles.step}>
                  <FileText className={styles.stepIcon} />
                  <h3 className={styles.stepTitle}>Contrato</h3>
                  <p className={styles.stepDescription}>
                    Aqui vamos oficializar nossa parceria de maneira formal!
                  </p>
                </div>
              </div>
            </div>
          </AnimatedBoxEnter>
        </div>
      </section>
      {/* Formulário de contato */}
      <section id="Contato" className={styles.formContactContainer}>
        <div className={styles.formContactTitle}>
          <h1 className={`${playfairDisplay.className}`}>
            Agilize sua solicitação!
          </h1>

          <p>sua marca merece destaque</p>
          <Image
            className={styles.formContatStribble}
            src={pinkLine}
            alt="Risco de decoração do titulo."
          />
        </div>

        <div className={styles.formContactContent}>
          <Image
            src={BrilhoFundo}
            className={styles.brilhoFundo}
            alt="imagens de decoração"
          />
          <Image
            src={BrilhoTopo}
            className={styles.brilhoTopo}
            alt="imagens de decoração"
          />

          <Image
            src={laptop}
            width={215}
            height={215}
            alt="laptop"
            className={styles.formlaptopImage}
          />
          <Image
            src={phone}
            width={178}
            height={178}
            alt="phone"
            className={styles.formphoneImage}
          />
          <div className={styles.secadorWapperEsquerda}>
            <Image
              src={secadorBrilhoEsquerda}
              className={styles.secadorEsquerda}
              alt="imagens de decoração"
            />
            <Image
              className={styles.blur}
              src={blur}
              alt="imagens de decoração"
            />
          </div>

          <div className={styles.secadorWapperDireita}>
            <Image
              src={secadorBrilhoDireita}
              className={styles.secadorDireita}
              alt="imagens de decoração"
            />
            <Image
              className={styles.blur}
              src={blur}
              alt="imagens de decoração"
            />
          </div>

          <div className={styles.secadorWapperEsquerda}>
            <Image
              src={secadorBrilhoEsquerda}
              className={styles.secadorEsquerda}
              alt="imagens de decoração"
            />
            <Image
              className={styles.blur}
              src={blur}
              alt="imagens de decoração"
            />
          </div>

          <div className={styles.secadorWapperEsquerda}>
            <Image
              src={secadorBrilhoEsquerda}
              className={styles.secadorEsquerda}
              alt="imagens de decoração"
            />
            <Image
              className={styles.blur}
              src={blur}
              alt="imagens de decoração"
            />
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
