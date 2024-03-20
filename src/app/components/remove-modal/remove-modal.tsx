"use client";
import { useRegisterContext } from "@/app/contexts/register-context";
import { Button, Hr, Modal } from "..";
import style from "./remove-modal.module.scss";
import { removeLocalStorage } from "@/app/utils/utils";
import { cars } from "@/app/constants/cars";

interface RemoveModal {
  isOpen: boolean;
}

export const RemoveModal = ({ isOpen }: RemoveModal) => {
  const { setOpenRemoveModal, setCarList } = useRegisterContext();

  const handleRemoveLocalStorage = () => {
    removeLocalStorage("item_key");

    setCarList(cars);
    setOpenRemoveModal(false);
  };

  return (
    <Modal isOpen={isOpen} height={260}>
      <div className={style.removeModalTitle}>Tem certeza?</div>
      <p>
        Esta ação vai remover todos os cards e alterações feitas por{" "}
        <strong>você</strong>.
      </p>
      <Hr />
      <div className={style.buttonsContainer}>
        <Button variant="outlined" onClick={() => setOpenRemoveModal(false)}>
          Voltar
        </Button>
        <Button color="error" onClick={() => handleRemoveLocalStorage()}>
          Resetar
        </Button>
      </div>
    </Modal>
  );
};
