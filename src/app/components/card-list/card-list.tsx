import { Cars } from "@/app/constants/cars";
import { Card, CardBlank } from "..";
import styles from "./card-list.module.scss";

interface CardListProps {
  items: Cars[];
}

export const CardList = ({ items }: CardListProps) => {
  return (
    <section className={styles.cardList}>
      <header className={styles.sectionHeader}>
        <h1>Resultados</h1>
      </header>
      <div className={styles.cardListGrid}>
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        <CardBlank />
      </div>
    </section>
  );
};
