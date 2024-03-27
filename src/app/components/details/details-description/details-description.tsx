"use client";
import style from "./details-description.module.scss";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Cars } from "@/app/constants/cars";
import { DescriptionSection } from "./description-section";
import { RegisterDescriptionModal } from "../..";
import { useRegisterContext } from "@/app/contexts/register-context";
import { hasDescription } from "@/app/utils/utils";

interface DetailsDescriptionProps {
  carItem: Cars;
}

export const DetailsDescription = ({ carItem }: DetailsDescriptionProps) => {
  const { openRegisterModal, setStage, setOpenRegisterDescriptionModal } =
    useRegisterContext();

  const handleOpenAddDescriptionModal = () => {
    setStage("description");
    setOpenRegisterDescriptionModal(true);
  };

  const isDescription = hasDescription(carItem);
  return (
    <>
      <RegisterDescriptionModal
        isOpen={openRegisterModal}
        currentCar={carItem}
      />
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
          onClick={() => handleOpenAddDescriptionModal()}
        >
          <div className={style.withoutDescriptionText}>
            <IoMdAddCircleOutline className={style.withoutDescriptionIcon} />
            Adicionar descrição
          </div>
        </div>
      </div>
    </>
  );
};
