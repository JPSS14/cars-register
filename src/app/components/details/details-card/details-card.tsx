import { Cars } from "@/app/constants/cars";
import { Card } from "../..";
import style from "./details-card.module.scss";

interface DetailsCardProps {
  carItem: Cars;
}

export const DetailsCard = ({ carItem }: DetailsCardProps) => {
  return (
    <div className={style.detailsCardContainer}>
      {carItem && <Card item={carItem} isEditCard />}
    </div>
  );
};
