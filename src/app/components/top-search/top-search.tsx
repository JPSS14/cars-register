import { Banner, Search } from "..";
import styles from "./top-search.module.scss";

export const TopSearch = () => {
  return (
    <div className={styles.topSearch}>
      <Banner />
      <div className={styles.searchContainer}>
        <Search />
      </div>
    </div>
  );
};
