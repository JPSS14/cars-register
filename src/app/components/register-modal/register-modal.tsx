"use client";
import { automakers } from "@/app/constants/automakers";
import { Button, Modal, Select, Stepper, TextArea, Input } from "..";
import { useRegisterContext } from "@/app/contexts/register-context";
import styles from "./register-modal.module.scss";
import { Cars } from "@/app/constants/cars";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRef, useState } from "react";
import {
  automakerModelBuilder,
  maximumSpeedRating,
  powerRating,
  torqueRating,
  setLocalStorage,
} from "@/app/utils/utils";

interface RegisterModalProps {
  isOpen: boolean;
  currentCar?: Cars;
}

export const RegisterModal = ({ isOpen, currentCar }: RegisterModalProps) => {
  const {
    setStage,
    stage,
    setOpenRegisterModal,
    setCarList,
    carList,
    setCurrentCar,
  } = useRegisterContext();
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    register,
    trigger,
    formState: { errors },
  } = useForm<Cars>({
    mode: "all",
  });

  console.log("currentCar: ", currentCar);

  const [descriptionIndex, setDescriptionIndex] = useState<number[]>([0]);

  const handleAddDescription = () => {
    setDescriptionIndex([...descriptionIndex, descriptionIndex.length]);
  };

  const handleRemoveCarListById = (currentId?: number) => {
    return carList.filter((item) => item.id !== currentId);
  };

  const onSubmit: SubmitHandler<Cars> = (data) => {
    setOpenRegisterModal(false);

    const addRatingData: Cars = {
      ...data,
      id: currentCar ? currentCar.id : carList.length + 1,
      automakerModel: automakerModelBuilder(data.model, data.automaker),
      year: Number(data.year),
      power: {
        value: Number(data.power.value),
        rating: powerRating(data.power.value),
      },
      torque: {
        ...data.torque,
        rating: torqueRating(data.torque.value),
      },
      maximumSpeed: {
        ...data.maximumSpeed,
        rating: maximumSpeedRating(data.maximumSpeed.value),
      },
    };

    const filteredList = handleRemoveCarListById(currentCar && currentCar.id);

    if (currentCar) {
      setCurrentCar(addRatingData);
      console.log("addRatingData: ", addRatingData);
    }

    setCarList([...filteredList, addRatingData]);
    setLocalStorage("item_key", [...filteredList, addRatingData]);
    setStage("initial");
    reset();
  };

  const inputRef = useRef(null);

  const validateFields = async () => {
    const isValid = await trigger();
    if (isValid) {
      return isValid;
    }
    return isValid;
  };

  const nextStage = async () => {
    const isValid = await validateFields();
    if (isValid) {
      if (stage === "initial") {
        setStage("status");
      } else if (stage === "status") {
        setStage("description");
      }
    }
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

  return (
    // TODO: Quebrar steps do formulário em arquivos diferentes
    <Modal isOpen={isOpen}>
      <Stepper />
      <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        {stage === "initial" && (
          <div className={styles.inputsSection}>
            <div>
              <Controller
                name="automaker"
                defaultValue={currentCar ? currentCar.automaker : ""}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    items={automakers}
                    label="Montadora"
                    errorMessage={
                      errors.automaker && "Este campo é obrigatório!"
                    }
                  />
                )}
              />
              <Input
                {...register("model", { required: true })}
                label="Modelo"
                placeholder="Digite o nome do modelo"
                errorMessage={errors.model && "Este campo é obrigatório!"}
                defaultValue={currentCar ? currentCar.model : ""}
              />
              <Input
                defaultValue={currentCar && currentCar.year}
                {...register("year", { required: true })}
                label="Ano"
                placeholder="Digite o ano do carro"
                errorMessage={errors.year && "Este campo é obrigatório!"}
              />
              <Input
                {...register("image", { required: true })}
                label="Imagem"
                placeholder="Selecione uma imagem 1920px"
                errorMessage={errors.image && "Este campo é obrigatório!"}
                defaultValue={currentCar ? currentCar.image : ""}
              />
            </div>
            <div className={styles.footer}>
              <Button onClick={nextStage}>Próximo</Button>
            </div>
          </div>
        )}

        {stage === "status" && (
          <div className={styles.inputsSection}>
            <div>
              <Input
                {...register("power.value", {
                  required: true,
                  pattern: /^\d+([.,]?\d+)$/,
                })}
                label="Potência"
                placeholder="Digite a potência do carro (cv)"
                defaultValue={currentCar ? currentCar.power.value : ""}
                errorMessage={errors.power && "Este campo é obrigatório!"}
              />
              <Input
                {...register("torque.value", {
                  required: true,
                  pattern: /^\d+([.,]?\d+)$/,
                })}
                label="Torque"
                placeholder="Digite o torque do carro (kgfm)"
                defaultValue={currentCar ? currentCar.torque.value : ""}
                errorMessage={errors.torque && "Este campo é obrigatório!"}
              />
              <Input
                {...register("maximumSpeed.value", {
                  required: true,
                  pattern: /^\d+([.,]?\d+)$/,
                })}
                label="Velocidade Máxima"
                placeholder="Digite a velocidade máxima"
                defaultValue={currentCar ? currentCar.maximumSpeed.value : ""}
                errorMessage={
                  errors.maximumSpeed && "Este campo é obrigatório!"
                }
              />
            </div>
            <div className={styles.footer}>
              <Button onClick={nextStage}>Próximo</Button>
            </div>
          </div>
        )}

        {stage === "description" && (
          <div className={styles.inputsSection}>
            <div className={styles.description}>
              {descriptionIndex.map((index) => (
                <div key={index}>
                  <Input
                    {...register(`description.${index}.title`)}
                    label="Título"
                    placeholder="Digite um título"
                    defaultValue={
                      handleDescriptionTitleValidation(index)
                        ? handleDescriptionTitleValidation(index)
                        : ""
                    }
                  />

                  <TextArea
                    label="Texto"
                    placeholder="Digite uma descrição"
                    {...register(`description.${index}.textDescription`)}
                    defaultValue={
                      handleTextDescriptionValidation(index)
                        ? handleTextDescriptionValidation(index)
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
      </form>
    </Modal>
  );
};
