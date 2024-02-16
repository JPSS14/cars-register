import { RiStarLine } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";
import styles from "./rating.module.scss";

interface RatingProps {
  value: number;
}

export const Rating = ({ value }: RatingProps) => {
  const emptyStars = 5 - value;
  return (
    <div className={styles.ratingContainer}>
      {[...Array(value)].map((_, index) => (
        <RiStarFill key={index} />
      ))}
      {emptyStars > 0 &&
        [...Array(emptyStars)].map((_, index) => <RiStarLine key={index} />)}
    </div>
  );
};
