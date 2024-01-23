import { ReactNode } from "react";
import styles from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
}

export const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>{children}</div>
    </div>
  );
};
