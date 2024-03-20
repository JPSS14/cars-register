"use client";
import style from "./details-description.module.scss";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Cars } from "@/app/constants/cars";
import { DescriptionSection } from "./description-section";

interface DetailsDescriptionProps {
  carItem: Cars;
}

export const DetailsDescription = ({ carItem }: DetailsDescriptionProps) => {
  const handleHasDescription = () => {
    if (carItem.description) {
      if (
        carItem.description.length === 1 &&
        carItem.description[0].textDescription === "" &&
        carItem.description[0].title === ""
      ) {
        return false;
      } else {
        return true;
      }
    }
    return true;
  };

  const isDescription = handleHasDescription();
  return (
    <div className={style.detailsDescriptionContainer}>
      {isDescription && (
        <article className={style.descriptionArticle}>
          <header className={style.descriptionArticleHeader}>
            <h1>Descrição</h1>
          </header>
          <div className={style.descriptionSectionListContainer}>
            <DescriptionSection description={carItem.description} />
          </div>
        </article>
      )}
      <div
        className={`${style.withoutDescriptionContainer} ${
          isDescription && style.withDescription
        }`}
      >
        <div className={style.withoutDescriptionText}>
          <IoMdAddCircleOutline className={style.withoutDescriptionIcon} />
          Adicionar descrição
        </div>
      </div>
    </div>
  );
};
