import { Banner } from "./components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.teste}>Teste</div>
    </main>
  );
}
