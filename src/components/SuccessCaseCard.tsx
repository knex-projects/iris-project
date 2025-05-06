import Image from "next/image";
import { StaticImageData } from "next/image";

import styles from "../styles/components/SuccessCaseCard.module.css";

interface SuccessCaseCardProps {
  logo: StaticImageData;
  name: string;
  isActive?: boolean;
}

const SuccessCaseCard = ({
  logo,
  name,
  isActive = false,
}: SuccessCaseCardProps) => {
  return (
    <div
      className={`${styles.SuccessCaseCardContainer} ${
        isActive ? "border-green-500" : "border-transparent"
      }`}
    >
      <Image src={logo} alt={`Logo da ${name}`} />
    </div>
  );
};

export default SuccessCaseCard;
