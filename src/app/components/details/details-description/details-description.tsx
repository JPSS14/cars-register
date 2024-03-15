"use client";
import { useState } from "react";
import style from "./details-description.module.scss";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Cars } from "@/app/constants/cars";
import { DescriptionSection } from "./description-section";

interface DetailsDescriptionProps {
  carItem: Cars;
}

export const DetailsDescription = ({ carItem }: DetailsDescriptionProps) => {
  const [value, setValue] = useState(true);
  return (
    <div className={style.detailsDescriptionContainer}>
      {value && (
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
          value && style.teste
        }`}
        onClick={() => setValue(!value)}
      >
        <div className={style.withoutDescriptionText}>
          <IoMdAddCircleOutline className={style.withoutDescriptionIcon} />
          Adicionar descrição
        </div>
      </div>
    </div>
  );
};
