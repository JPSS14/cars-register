import Image from "next/image";
import styles from "./banner.module.scss";

export const Banner = () => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/Koenigsegg-Jesko-2020.jpg"
        width={1200}
        height={700}
        alt="Koenigsegg Jesko 2020 imagem"
      />
      <div className={styles.stripe1}></div>
      <div className={styles.stripe2}></div>
      <div className={styles.stripe3}></div>
      <div className={styles.stripe4}></div>
      <div className={styles.stripe5}></div>
    </div>
  );
};
