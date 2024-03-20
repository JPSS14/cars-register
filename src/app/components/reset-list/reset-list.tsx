"use client";
import { useRegisterContext } from "@/app/contexts/register-context";
import { Button, RemoveModal } from "..";
import style from "./reset-list.module.scss";

export const ResetList = () => {
  const { setOpenRemoveModal, openRemoveModal } = useRegisterContext();

  return (
    <div className={style.resetContainer}>
      <RemoveModal isOpen={openRemoveModal} />
      <Button
        color="error"
        variant="outlined"
        onClick={() => setOpenRemoveModal(true)}
      >
        Resetar Cards
      </Button>
    </div>
  );
};
