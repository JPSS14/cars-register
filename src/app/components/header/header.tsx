import Image from "next/image";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/cars-register-logo.svg"
        alt="Cars Register Logo"
        width={239}
        height={48}
        priority
      />
    </header>
  );
};
