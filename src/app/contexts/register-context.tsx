import { createContext, useContext, useState } from "react";

type RegisterContext = {
  openRegisterModal: boolean;
  setOpenRegisterModal: (open: boolean) => void;
};

export const RegisterContext = createContext({} as RegisterContext);

type RegisterContextProviderProps = {
  children: React.ReactNode;
};

export const RegisterContextProvider = ({
  children,
}: RegisterContextProviderProps) => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  return (
    <RegisterContext.Provider
      value={{
        openRegisterModal,
        setOpenRegisterModal,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => {
  return useContext(RegisterContext);
};
