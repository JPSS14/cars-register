import styles from "./page.module.scss";

export default function Car({ params }: { params: { carId: string } }) {
  return (
    <main className={styles.main}>
      <div>CarId: {params.carId}</div>
      <div>e</div>
    </main>
  );
}
