"use client";
import { CardList, RegisterModal, TopSearch } from "./components";
import { useRegisterContext } from "./contexts/register-context";
import styles from "./page.module.scss";

export default function Home() {
  const { openRegisterModal, carListFiltered } = useRegisterContext();
  return (
    <main className={styles.main}>
      <TopSearch />
      <CardList items={carListFiltered} />
      <RegisterModal isOpen={openRegisterModal} />
    </main>
  );
}
