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
    trigger,
    formState: { errors },
  } = useForm<Cars>({
    mode: "all",
  });

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
              />
              <Input
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
                {...register("power.value", { required: true })}
                label="Potência"
                placeholder="Digite a potência do carro (cv)"
                errorMessage={errors.power && "Este campo é obrigatório!"}
              />
              <Input
                {...register("torque.value", { required: true })}
                label="Torque"
                placeholder="Digite o torque do carro (kgfm)"
                errorMessage={errors.torque && "Este campo é obrigatório!"}
              />
              <Input
                {...register("maximumSpeed.value", { required: true })}
                label="Velocidade Máxima"
                placeholder="Digite a velocidade máxima"
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
                  />

                  <TextArea
                    label="Texto"
                    placeholder="Digite uma descrição"
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
