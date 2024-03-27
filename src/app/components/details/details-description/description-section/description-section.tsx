import { Description } from "@/app/constants/cars";
import style from "./description-section.module.scss";

interface DescriptionSectionProps {
  description: Description[];
}

export const DescriptionSection = ({
  description,
}: DescriptionSectionProps) => {
  return (
    <>
      {description.map((item, index) => (
        <section className={style.descriptionSectionContainer} key={index}>
          <header>
            <h2 className={style.descriptionBlockTitle}>{item.title}</h2>
          </header>
          <p className={style.descriptionBlockText}>{item.textDescription}</p>
        </section>
      ))}
    </>
  );
};
