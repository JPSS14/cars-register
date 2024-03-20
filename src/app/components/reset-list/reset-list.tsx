import { useRegisterContext } from "@/app/contexts/register-context";
import { Button } from "..";
import style from "./reset-list.module.scss";
import { removeLocalStorage } from "@/app/utils/utils";
import { cars } from "@/app/constants/cars";

export const ResetList = () => {
  const { setCarList } = useRegisterContext();

  const handleRemoveLocalStorage = () => {
    removeLocalStorage("item_key");

    setCarList(cars);
  };

  return (
    <div className={style.resetContainer}>
      <Button
        color="error"
        variant="outlined"
        onClick={() => handleRemoveLocalStorage()}
      >
        Resetar Cards
      </Button>
    </div>
  );
};
