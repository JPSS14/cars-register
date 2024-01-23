"use client";
import { automakers } from "@/app/constants/automakers";
import { Button, Input, Modal, Select, Stepper, TextArea } from "..";
import { useRegisterContext } from "@/app/contexts/register-context";
import styles from "./register-modal.module.scss";

interface RegisterModalProps {
  isOpen: boolean;
}

export const RegisterModal = ({ isOpen }: RegisterModalProps) => {
  const { setStage, stage, setOpenRegisterModal } = useRegisterContext();
  return (
    <Modal isOpen={isOpen}>
      <Stepper />
      {stage === "initial" && (
        <div className={styles.inputsSection}>
          <div>
            <Select items={automakers} label="Montadora" />
            <Input label="Modelo" placeholder="Digite o nome do modelo" />
            <Input label="Ano" placeholder="Digite o ano do carro" />
            <Input label="Imagem" placeholder="Selecione uma imagem 1920px" />
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
              label="Potência"
              placeholder="Digite a potência do carro (cv)"
            />
            <Input
              label="Torque"
              placeholder="Digite o torque do carro (kgfm)"
            />
            <Input
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
          <div>
            <Input label="Título" placeholder="Digite um título" />
            <TextArea
              label="Velocidade Máxima"
              placeholder="Digite a velocidade máxima"
            />
          </div>
          <div className={styles.footer}>
            <Button onClick={() => setOpenRegisterModal(false)}>
              Finalizar
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
