import React from "react";
import Image from "next/image";
import ImageLogo from "../../public/images/logo.png";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

import styles from "../styles/components/Header.module.css";

function Header() {
  return (
    <Navbar className={styles.headerContainer} disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src={ImageLogo} alt="Logo Iris" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex">
        <NavbarBrand>
          <Image src={ImageLogo} alt="Logo Iris" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className={` hidden sm:flex gap-4`} justify="center">
        <NavbarItem>
          <Link className={`${styles.navText} conheca`} href="#">
            Conheça a Íris
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className={`${styles.navText} cases`}
            aria-current="page"
            href="#"
          >
            Cases
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`${styles.navText} solucoes`} href="#">
            Soluções
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`${styles.navText} processos`} href="#">
            Processos
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button
            className={styles.buttonNav}
            as={Link}
            href="#"
            variant="flat"
          >
            Contato
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className={styles.sidebarContainer}>
        <NavbarMenuItem>
          <Link className={`${styles.navText} mb-3 w-full`} href="#" size="lg">
            Conheça a Íris
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className={`${styles.navText} mb-3 w-full`} href="#" size="lg">
            Cases
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className={`${styles.navText} mb-3 w-full`} href="#" size="lg">
            Soluções
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className={`${styles.navText} mb-3 w-full`} href="#" size="lg">
            Processos
          </Link>
        </NavbarMenuItem>
        <NavbarItem>
          <Button
            className={styles.buttonNav}
            as={Link}
            href="#"
            variant="flat"
          >
            Contato
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
