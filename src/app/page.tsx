"use client";
import { CardList, RegisterModal, TopSearch } from "./components";
import { cars } from "./constants/cars";
import { useRegisterContext } from "./contexts/register-context";
import styles from "./page.module.scss";

export default function Home() {
  const { openRegisterModal } = useRegisterContext();
  return (
    <main className={styles.main}>
      <TopSearch />
      <CardList items={cars} />
      <RegisterModal isOpen={openRegisterModal} />
    </main>
  );
}
