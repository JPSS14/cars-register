import { RiStarLine } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";
import styles from "./rating.module.scss";

export const Rating = () => {
  return (
    <div className={styles.ratingContainer}>
      <RiStarFill />
      <RiStarLine />
      <RiStarLine />
      <RiStarLine />
      <RiStarLine />
    </div>
  );
};
