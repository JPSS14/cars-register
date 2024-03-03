import Image from "next/image";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src="/cars-register-logo.svg"
        alt="Cars Register Logo"
        width={239}
        height={48}
        priority
      />
    </footer>
  );
};
