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
      <NavbarContent className="lg:hidden pr-4" justify="center">
        <NavbarBrand>
          <Image src={ImageLogo}  alt="Logo Iris" />{" "} {/* Logo Iris do modo mobile*/}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="lg:hidden lg:absolute"
        justify="end"
      >
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="hidden lg:flex " justify="end">
        <NavbarBrand>
          <Image src={ImageLogo} alt="Logo Iris" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className={` hidden lg:flex gap-10`} justify="center">
        <NavbarItem>
          <Link className={`${styles.navText} conheca`} href="#ConheçaaIris">
            Conheça a Iris
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className={`${styles.navText} cases`}
            aria-current="page"
            href="#Cases"
          >
            Cases
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`${styles.navText} solucoes`} href="#Soluções">
            Soluções
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`${styles.navText} processos`} href="#Processos">
            Processos
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button
            className={styles.buttonNav}
            as={Link}
            href="#Contato"
            variant="flat"
          >
            Contato
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className={styles.sidebarContainer}>
        <NavbarMenuItem>
          <Link
            className={`${styles.navText} mb-0 bl-0 text-[#4D61B7] mt-20 w-full`}
            href="#ConheçaaIris"
            size="lg"
          >
            Conheça a Iris
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={`${styles.navText} mb-0 text-[#2DA342] w-full`}
            href="#Cases"
            size="lg"
          >
            Cases
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={`${styles.navText} mb-0 w-full text-[#FCC837] text-center`}
            href="#Soluções"
            size="lg"
          >
            Soluções
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className={`${styles.navText} mb-0 w-full text-[#F96836]  text-center`}
            href="#Processos"
            size="lg"
          >
            Processos
          </Link>
        </NavbarMenuItem>
        <NavbarItem>
          <Button
            className={styles.buttonNav}
            as={Link}
            href="#Contato"
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
