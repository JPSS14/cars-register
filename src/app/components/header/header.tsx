import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/cars-register-logo.svg"
          alt="Cars Register Logo"
          width={239}
          height={48}
          priority
        />
      </Link>
    </header>
  );
};
