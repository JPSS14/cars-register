"use client";
import { useState } from "react";
import style from "./details-description.module.scss";
import { IoMdAddCircleOutline } from "react-icons/io";

export const DetailsDescription = () => {
  const [value, setValue] = useState(true);
  return (
    <div className={style.detailsDescriptionContainer}>
      {value && (
        <article className={style.descriptionArticle}>
          <header className={style.descriptionArticleHeader}>
            <h1>Descrição</h1>
          </header>
          <div className={style.descriptionSectionListContainer}>
            <section className={style.descriptionSectionContainer}>
              <header>
                <h2 className={style.descriptionBlockTitle}>Title</h2>
              </header>
              <p className={style.descriptionBlockText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, iusto tempora dolore eveniet minus voluptates
                repellendus. Sed vero sit eius. Animi distinctio, excepturi
                necessitatibus labore omnis voluptas quae eligendi laborum!
              </p>
            </section>
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
