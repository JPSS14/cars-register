"use client";
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from "./stepper.module.scss";
import { useRegisterContext } from "@/app/contexts/register-context";

interface StepperProps {
  noStepBack?: boolean;
}

export const Stepper = ({ noStepBack }: StepperProps) => {
  const { stage, setStage, setOpenRegisterModal } = useRegisterContext();
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

  const getBack = () => {
    switch (stage) {
      case "initial":
        return setOpenRegisterModal(false);
      case "status":
        return setStage("initial");
      case "description":
        return setStage("status");
      default:
        return "";
    }
  };
  return (
    <div className={styles.stepperContainer}>
      <div className={styles.stepper}>
        {!noStepBack && (
          <FaArrowLeftLong
            className={styles.leftIcon}
            onClick={() => getBack()}
          />
        )}
        <span
          className={`${noStepBack ? styles.noStepBack : styles.stepperName}`}
        >
          {getStepText()}
        </span>
      </div>
      <div className={styles.loadingContainer}>
        <div className={`${styles.loadingBar} ${styles[stage]}`}></div>
      </div>
    </div>
  );
};
