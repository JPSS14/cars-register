"use client";
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "./stepper.module.scss";
import { useRegisterContext } from "@/app/contexts/register-context";

export const Stepper = () => {
  const { stage } = useRegisterContext();
  const getStepText = () => {
    switch (stage) {
      case "initial":
        return "Informações básicas";
      case "status":
        return "Status";
      case "description":
        return "Descrição";
      default:
        return "";
    }
  };
  return (
    <div className={styles.stepperContainer}>
      <div className={styles.stepper}>
        <FaArrowLeftLong className={styles.leftIcon} />
        <span className={styles.stepperName}>{getStepText()}</span>
      </div>
      <div className={styles.loadingContainer}>
        <div className={`${styles.loadingBar} ${styles[stage]}`}></div>
      </div>
    </div>
  );
};
