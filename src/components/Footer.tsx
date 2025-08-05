import Image from "next/image";
import styles from "../styles/components/Footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.image}>
        <Image
          src={"/images/logo.svg"}
          alt="logo Iris"
          fill
          className="object-contain"
        />
      </div>
      <div className={styles.infoContainer}>
        <div className=" ">
          <h1 className={styles.h1Text}>Recursos</h1>
          <a href="#">
            <h1 className={styles.h2Text}>Conheça a Iris</h1>
          </a>
          <a href="#">
            <h1 className={styles.h2Text}>Cases</h1>
          </a>
          <a href="#">
            <h1 className={styles.h2Text}>Soluções</h1>
          </a>
          <a href="#">
            {" "}
            <h1 className={styles.h2Text}>Processos</h1>
          </a>
        </div>
        <div>
          <h1 className={styles.h1Text}>Comunidade</h1>
          <Link
            href="https://www.instagram.com/ejiriscomunicacao/"
            target="_blank"
          >
            {" "}
            <h1 className={styles.h2Text}>Instagram</h1>
          </Link>
          <Link
            href="https://www.facebook.com/p/Iris-Comunicação-100063781523530/"
            target="_blank"
          >
            {" "}
            <h1 className={styles.h2Text}>Facebook</h1>
          </Link>
          <Link
            href="https://www.linkedin.com/company/iriscomunicacao/"
            target="_blank"
          >
            {" "}
            <h1 className={styles.h2Text}>LinkedIn</h1>
          </Link>
        </div>
        <div className={styles.contatoContainer}>
          <h1 className={styles.h1Text}>Entre em contato</h1>
          <h1 className={styles.h3Text}>Whatsapp</h1>
          <a href="https://wa.me/5583991932955?text=Olá%2C%20gostaria%20de%20mais%20informações!">
            <h1 className={styles.h4Text}>(83) 99193-2955</h1>
          </a>
        </div>
      </div>
      <h3 className={styles.h5Text}>
        © 2025 Iris. Todos os direitos reservados.
      </h3>
    </section>
  );
}
