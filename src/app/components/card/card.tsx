"use client";
import Image from "next/image";
import styles from "./card.module.scss";
import { Button, Rating, RegisterModal } from "..";
import { Cars } from "@/app/constants/cars";
import Link from "next/link";
import { useRegisterContext } from "@/app/contexts/register-context";

interface CardProps {
  item: Cars;
  isEditCard?: boolean;
}

export const Card = ({ item, isEditCard }: CardProps) => {
  const { setOpenRegisterModal, openRegisterModal, setStage } =
    useRegisterContext();

  const handleOpenRegisterModal = () => {
    setStage("initial");
    setOpenRegisterModal(true);
  };

  return (
    <>
      <RegisterModal isOpen={openRegisterModal} currentCar={item} />
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={item.image}
            width={888}
            height={575}
            alt={item.automakerModel}
          />
          <div className={styles.logoContainer}>
            <Image
              src={`/${item.automaker}-logo.png`}
              width={50}
              height={50}
              alt={item.automaker}
            />
          </div>
          <header className={styles.carNameContainer}>
            <h1 className={styles.automaker}>{item.automaker}</h1>
            <p className={styles.carName}>{item.model}</p>
          </header>
          <div className={styles.statusContainer}>
            <div className={styles.ratingStatus}>
              <p>Potência:</p>
              <Rating value={item.power.rating} />
            </div>
            <div className={styles.ratingStatus}>
              <p>Torque:</p>
              <Rating value={item.torque.rating} />
            </div>
            <div className={styles.ratingStatus}>
              <p>Velocidade Máx.:</p>
              <Rating value={item.maximumSpeed.rating} />
            </div>
          </div>
          <footer className={styles.footer}>
            {isEditCard ? (
              <Button
                color="secondary"
                fullWidth
                onClick={() => handleOpenRegisterModal()}
              >
                Editar
              </Button>
            ) : (
              <>
                <Link href={`/car/${item.id}`} passHref>
                  <Button color="secondary" fullWidth>
                    Ver mais
                  </Button>
                </Link>
              </>
            )}
          </footer>
        </div>
      </article>
    </>
  );
};
