import Image from "next/image";
import { StaticImageData } from "next/image";

import styles from "../styles/components/SuccessCaseCard.module.css";

export interface SucessCaseProps {
  logo: StaticImageData;
  name: string;
  description: string;
}
interface SuccessCaseCardProps {
  logo: StaticImageData;
  name: string;
  isActive?: boolean;
  onClick: () => void;
}

const SuccessCaseCard = ({
  logo,
  name,
  isActive = false,
  onClick,
}: SuccessCaseCardProps) => {
  console.log(isActive);

  return (
    <div
      className={`${styles.SuccessCaseCardContainer} border-2 ${
        isActive ? "border-green-500" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <Image src={logo} alt={`Logo da ${name}`} />
    </div>
  );
};

export default SuccessCaseCard;
