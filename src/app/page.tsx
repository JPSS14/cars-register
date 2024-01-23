import { CardList, TopSearch } from "./components";
import { Cars } from "./constants/cars";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopSearch />
      <CardList items={Cars} />
    </main>
  );
}
