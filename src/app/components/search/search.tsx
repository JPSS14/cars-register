import { Button, Hr, Input } from "..";
import styles from "./search.module.scss";

export const Search = () => {
  return (
    <div className={styles.search}>
      <h1>Encontre seu carro</h1>
      <Input placeholder="Modelo ou montadora" />
      <Button color="secondary">Buscar</Button>
      <Hr />
      <Button>Registrar Carro</Button>
    </div>
  );
};
