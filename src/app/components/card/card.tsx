import Image from "next/image";
import styles from "./card.module.scss";
import { Button, Rating } from "..";
import { Cars } from "@/app/constants/cars";

interface CardProps {
  item: Cars;
}

export const Card = ({ item }: CardProps) => {
  return (
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
            <Rating value={1} />
          </div>
        </div>
        <footer className={styles.footer}>
          <Button color="secondary" fullWidth>
            Ver mais
          </Button>
        </footer>
      </div>
    </article>
  );
};
