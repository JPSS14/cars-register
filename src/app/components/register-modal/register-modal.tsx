"use client";
import { automakers } from "@/app/constants/automakers";
import { Button, Modal, Select, Stepper, TextArea, Input } from "..";
import { useRegisterContext } from "@/app/contexts/register-context";
import styles from "./register-modal.module.scss";
import { Cars } from "@/app/constants/cars";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRef, useState } from "react";

interface RegisterModalProps {
  isOpen: boolean;
}

export const RegisterModal = ({ isOpen }: RegisterModalProps) => {
  const { setStage, stage, setOpenRegisterModal, setCarList, carList } =
    useRegisterContext();
  const {
    control,
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<Cars>();

  const [descriptionIndex, setDescriptionIndex] = useState<number[]>([0]);

  const handleAddDescription = () => {
    setDescriptionIndex([...descriptionIndex, descriptionIndex.length]);
  };

  const onSubmit: SubmitHandler<Cars> = (data) => {
    setOpenRegisterModal(false);
    setCarList([...carList, data]);
    console.log(data);
  };

  const inputRef = useRef(null);

  return (
    <Modal isOpen={isOpen}>
      <Stepper />
      <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        {stage === "initial" && (
          <div className={styles.inputsSection}>
            <div>
              <Controller
                name="automaker"
                control={control}
                render={({ field }) => (
                  <Select {...field} items={automakers} label="Montadora" />
                )}
              />
              <Input
                {...register("model")}
                label="Modelo"
                placeholder="Digite o nome do modelo"
              />
              <Input
                {...register("year")}
                label="Ano"
                placeholder="Digite o ano do carro"
              />
              <Input
                {...register("image")}
                label="Imagem"
                placeholder="Selecione uma imagem 1920px"
              />
            </div>
            <div className={styles.footer}>
              <Button onClick={() => setStage("status")}>Próximo</Button>
            </div>
          </div>
        )}

        {stage === "status" && (
          <div className={styles.inputsSection}>
            <div>
              <Input
                {...register("power")}
                label="Potência"
                placeholder="Digite a potência do carro (cv)"
              />
              <Input
                {...register("torque")}
                label="Torque"
                placeholder="Digite o torque do carro (kgfm)"
              />
              <Input
                {...register("maximumSpeed")}
                label="Velocidade Máxima"
                placeholder="Digite a velocidade máxima"
              />
            </div>
            <div className={styles.footer}>
              <Button onClick={() => setStage("description")}>Próximo</Button>
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
                  />

                  <TextArea
                    label="Velocidade Máxima"
                    placeholder="Digite a velocidade máxima"
                    {...register(`description.${index}.textDescription`)}
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
