import { Cars, Description } from "@/app/constants/cars";
import { Button, Input, Modal, Stepper, TextArea } from "..";
import styles from "./register-description-modal.module.scss";
import { useRegisterContext } from "@/app/contexts/register-context";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { numberToArray, setLocalStorage } from "@/app/utils/utils";

interface RegisterDescriptionModalProps {
  isOpen: boolean;
  currentCar: Cars;
}

export const RegisterDescriptionModal = ({
  isOpen,
  currentCar,
}: RegisterDescriptionModalProps) => {
  const {
    setOpenRegisterDescriptionModal,
    openRegisterDescriptionModal,
    setCarList,
    carList,
  } = useRegisterContext();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<Description[]>({
    mode: "all",
  });

  const [descriptionIndex, setDescriptionIndex] = useState<number[]>(
    currentCar?.description
      ? numberToArray(currentCar.description?.length)
      : [0]
  );

  const handleAddDescription = () => {
    setDescriptionIndex([...descriptionIndex, descriptionIndex.length]);
  };

  const handleRemoveCarListById = (currentId?: number) => {
    return carList.filter((item) => item.id !== currentId);
  };

  const handleDescriptionTitleValidation = (index: number) => {
    if (
      currentCar &&
      currentCar.description &&
      currentCar.description[index]?.title
    ) {
      return currentCar.description[index].title;
    } else {
      return "";
    }
  };

  const handleTextDescriptionValidation = (index: number) => {
    if (
      currentCar &&
      currentCar.description &&
      currentCar.description[index]?.textDescription
    ) {
      return currentCar.description[index].textDescription;
    } else {
      return "";
    }
  };

  const filteredList = handleRemoveCarListById(currentCar && currentCar.id);

  const onSubmit: SubmitHandler<Description[]> = (data) => {
    setOpenRegisterDescriptionModal(false);

    const addDescription = {
      ...currentCar,
      description: Object.values(data),
    };

    setCarList([...filteredList, addDescription]);
    setLocalStorage("item_key", [...filteredList, addDescription]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal isOpen={openRegisterDescriptionModal}>
        <Stepper />
        {currentCar?.description && (
          <div className={styles.inputsSection}>
            <div className={styles.description}>
              {descriptionIndex.map((item) => (
                <div key={item}>
                  <Input
                    {...register(`${item}.title`)}
                    label="Título"
                    placeholder="Digite um título"
                    defaultValue={
                      handleDescriptionTitleValidation(item)
                        ? handleDescriptionTitleValidation(item)
                        : ""
                    }
                  />

                  <TextArea
                    label="Texto"
                    placeholder="Digite uma descrição"
                    {...register(`${item}.textDescription`)}
                    defaultValue={
                      handleTextDescriptionValidation(item)
                        ? handleTextDescriptionValidation(item)
                        : ""
                    }
                  />
                </div>
              ))}
            </div>
            <div className={styles.footer}>
              <Button
                type="button"
                color="secondary"
                variant="outlined"
                onClick={() => handleAddDescription()}
              >
                Adicionar Descrição
              </Button>
              <Button type="submit">Finalizar</Button>
            </div>
          </div>
        )}
      </Modal>
    </form>
  );
};
