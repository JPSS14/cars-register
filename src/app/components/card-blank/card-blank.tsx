import Image from "next/image";
import styles from "./card-blank.module.scss";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRegisterContext } from "@/app/contexts/register-context";

export const CardBlank = () => {
  const { setOpenRegisterModal } = useRegisterContext();
  return (
    <div
      className={styles.cardBlank}
      onClick={() => setOpenRegisterModal(true)}
    >
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
