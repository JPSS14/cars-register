import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
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
  carListFiltered: Cars[];
  handleFilterCars: (car: string) => void;
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
  const [carListFiltered, setCarListFiltered] = useState(cars);

  useEffect(() => {
    setCarListFiltered(carList);
  }, [carList]);

  const handleFilterCars = (car: string) => {
    const filtered = carList.filter((item) =>
      item.automakerModel.toLowerCase().includes(car.toLowerCase())
    );
    setCarListFiltered(filtered);
  };

  return (
    <RegisterContext.Provider
      value={{
        openRegisterModal,
        setOpenRegisterModal,
        stage,
        setStage,
        carList,
        setCarList,
        carListFiltered,
        handleFilterCars,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => {
  return useContext(RegisterContext);
};
