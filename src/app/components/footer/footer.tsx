import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Image
          src="/cars-register-logo.svg"
          alt="Cars Register Logo"
          width={239}
          height={48}
          priority
        />
      </Link>
    </footer>
  );
};
