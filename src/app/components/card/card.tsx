import Image from "next/image";
import styles from "./card.module.scss";
import { Button, Rating } from "..";

export const Card = () => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src="/ferrari-f40.webp" width={888} height={575} alt="image" />
        <div className={styles.logoContainer}>
          <Image
            src="/ferrari-logo.png"
            width={50}
            height={50}
            alt="Car logo"
          />
        </div>
        <header className={styles.carNameContainer}>
          <h1 className={styles.automaker}>Ferrari</h1>
          <p className={styles.carName}>F40</p>
        </header>
        <div className={styles.statusContainer}>
          <div className={styles.ratingStatus}>
            <p>Potência:</p>
            <Rating />
          </div>
          <div className={styles.ratingStatus}>
            <p>Torque:</p>
            <Rating />
          </div>
          <div className={styles.ratingStatus}>
            <p>Velocidade Máx.:</p>
            <Rating />
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
