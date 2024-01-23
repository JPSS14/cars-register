import { createContext, useContext, useState } from "react";
import { StageType } from "../components/stepper/types";

type RegisterContext = {
  openRegisterModal: boolean;
  setOpenRegisterModal: (open: boolean) => void;
  stage: StageType;
  setStage: (stage: StageType) => void;
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

  return (
    <RegisterContext.Provider
      value={{
        openRegisterModal,
        setOpenRegisterModal,
        stage,
        setStage,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => {
  return useContext(RegisterContext);
};
