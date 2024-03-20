"use client";
import { Details } from "@/app/components/details";
import styles from "./page.module.scss";
import { useRegisterContext } from "@/app/contexts/register-context";
import { useEffect } from "react";
import { getLocalStorage } from "@/app/utils/utils";

export default function Car({ params }: { params: { carId: number } }) {
  const { setCarList } = useRegisterContext();

  useEffect(() => {
    const item = getLocalStorage("item_key");

    if (item) {
      setCarList(item);
    }
  }, [setCarList]);

  return (
    <main className={styles.main}>
      <Details carId={params.carId} />
    </main>
  );
}
