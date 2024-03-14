"use client";

import style from "./details.module.scss";
import { useRegisterContext } from "@/app/contexts/register-context";
import { useCallback, useEffect } from "react";
import { Card } from "..";

interface DetailsProps {
  carId: number;
}

export const Details = ({ carId }: DetailsProps) => {
  const { currentCar, setCurrentCar, carList } = useRegisterContext();

  const handleSearchCarById = useCallback(
    (id: number) => {
      const current = carList.filter((item) => item.id === Number(id));
      setCurrentCar(current[0]);
    },
    [carList, setCurrentCar]
  );

  useEffect(() => {
    handleSearchCarById(carId);
  }, [carId, handleSearchCarById]);

  return (
    <div className={style.detailsContainer}>
      <div className={style.cardContainer}>
        {currentCar && <Card item={currentCar} />}
      </div>
      <main className={style.detailsMain}>
        <header className={style.detailsMainHeader}>
          <h1>Detalhes</h1>
          {currentCar && (
            <div>
              <div className={style.statusGroup}>
                <p>
                  <strong>Potência</strong>:
                </p>
                <div className={style.statusGroupValue}>
                  <p>{currentCar?.power.value} cv</p>
                </div>
              </div>
              <div className={style.statusGroup}>
                <p>
                  <strong>Torque</strong>:
                </p>
                <div className={style.statusGroupValue}>
                  <p>{currentCar?.torque.value} kgfm</p>
                </div>
              </div>
              <div className={style.statusGroup}>
                <p>
                  <strong>Velocidade Máxima</strong>:{" "}
                </p>
                <div className={style.statusGroupValue}>
                  <p>{currentCar?.maximumSpeed.value} Km/h</p>
                </div>
              </div>
            </div>
          )}
        </header>
        <div className={style.descriptionContainer}></div>
      </main>
    </div>
  );
};
