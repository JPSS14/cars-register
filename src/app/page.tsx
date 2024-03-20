"use client";
import { useEffect } from "react";
import { CardList, RegisterModal, ResetList, TopSearch } from "./components";
import { useRegisterContext } from "./contexts/register-context";
import styles from "./page.module.scss";
import { getLocalStorage } from "./utils/utils";

export default function Home() {
  const { openRegisterModal, carListFiltered, setCarList, carList } =
    useRegisterContext();

  useEffect(() => {
    const item = getLocalStorage("item_key");

    if (item) {
      setCarList(item);
    }
  }, [setCarList]);

  return (
    <main className={styles.main}>
      <TopSearch />
      <CardList items={carListFiltered} />
      <RegisterModal isOpen={openRegisterModal} />
      {carList.length > 4 && <ResetList />}
    </main>
  );
}
