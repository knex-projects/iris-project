import React from "react";
import Image from "next/image";
import ImageLogo from "../../public/images/logo.png";

import styles from "../styles/components/Header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Image src={ImageLogo} alt="Logo Iris" />

      <nav className={styles.navContainer}>
        <a className={styles.navText} href="">
          Conheça a Íris
        </a>
        <a className={styles.navText} href="">
          Cases
        </a>
        <a className={styles.navText} href="">
          Soluções
        </a>
        <a className={styles.navText} href="">
          Processos
        </a>
        <button className={styles.buttonContact}>Contato</button>
      </nav>
    </header>
  );
}

export default Header;
