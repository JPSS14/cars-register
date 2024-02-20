import Image from "next/image";
import styles from "./card-blank.module.scss";
import { IoMdAddCircleOutline } from "react-icons/io";

export const CardBlank = () => {
  return (
    <div className={styles.cardBlank}>
      <div className={styles.contentContainer}>
        <Image
          src="/cars-register-mini-logo.svg"
          width={114}
          height={145}
          alt="Mini logo Cars Register"
        />
        <div className={styles.registerText}>Registrar Carro</div>
        <IoMdAddCircleOutline className={styles.registerIcon} />
      </div>
    </div>
  );
};
