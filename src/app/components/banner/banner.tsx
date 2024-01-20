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
    </div>
  );
};
