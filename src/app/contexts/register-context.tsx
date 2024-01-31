import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { StageType } from "../components/stepper/types";
import { Cars, cars } from "../constants/cars";

type RegisterContext = {
  openRegisterModal: boolean;
  setOpenRegisterModal: (open: boolean) => void;
  stage: StageType;
  setStage: (stage: StageType) => void;
  carList: Cars[];
  setCarList: Dispatch<SetStateAction<Cars[]>>;
};

export const RegisterContext = createContext({} as RegisterContext);

type RegisterContextProviderProps = {
  children: React.ReactNode;
};

export const RegisterContextProvider = ({
  children,
}: RegisterContextProviderProps) => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [stage, setStage] = useState<StageType>("initial");
  const [carList, setCarList] = useState(cars);

  return (
    <RegisterContext.Provider
      value={{
        openRegisterModal,
        setOpenRegisterModal,
        stage,
        setStage,
        carList,
        setCarList,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => {
  return useContext(RegisterContext);
};
