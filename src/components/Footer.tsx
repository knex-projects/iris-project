import Image from "next/image";
import styles from "../styles/components/Footer.module.css"

export function Footer(){

return(
<section className={styles.footerContainer} >
    <Image className={styles.image} src={"/images/logo.svg"} alt="logo Iris"  width={187} height={125}/>
    <div className={styles.infoContainer}>
    <div className=" " >
        <h1 className={styles.h1Text}>Recursos</h1>
        <a href="#"><h1 className={styles.h2Text}>Conheça a Íris</h1></a>
      <a href="#"><h1 className={styles.h2Text}>Cases</h1></a>
       <a href="#"><h1 className={styles.h2Text}>Soluções</h1></a>
        <a href="#"> <h1 className={styles.h2Text}>Processos</h1></a>
    </div>
    <div >
    <h1  className={styles.h1Text}>Comunidade</h1>
        <a href="https://www.instagram.com/ejiriscomunicacao/"> <h1 className={styles.h2Text}>Instagram</h1></a>
        <a href="https://www.facebook.com/p/Iris-Comunicação-100063781523530/"><h1 className={styles.h2Text}>Facebook</h1></a>
        
    </div>
    <div className=" ">
        <h1 className={styles.h1Text}>Entre em contato</h1>
        <h1 className={styles.h3Text}>Whatsapp</h1>
        <h1 className={styles.h4Text}>(83) 99193-2955</h1>
    </div>
    </div>
    <h3 className={styles.h5Text}>© 2025 Iris. Todos os direitos reservados.</h3>

    
</section>    
)
}