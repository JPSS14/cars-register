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
  openRemoveModal: boolean;
  setOpenRemoveModal: (open: boolean) => void;
  openRegisterDescriptionModal: boolean;
  setOpenRegisterDescriptionModal: (open: boolean) => void;
  stage: StageType;
  setStage: (stage: StageType) => void;
  carList: Cars[];
  setCarList: Dispatch<SetStateAction<Cars[]>>;
  carListFiltered: Cars[];
  handleFilterCars: (car: string) => void;
  currentCar?: Cars;
  setCurrentCar: (car: Cars) => void;
};

export const RegisterContext = createContext({} as RegisterContext);

type RegisterContextProviderProps = {
  children: React.ReactNode;
};

export const RegisterContextProvider = ({
  children,
}: RegisterContextProviderProps) => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openRegisterDescriptionModal, setOpenRegisterDescriptionModal] =
    useState(false);
  const [stage, setStage] = useState<StageType>("initial");
  const [carList, setCarList] = useState(cars);
  const [carListFiltered, setCarListFiltered] = useState(cars);
  const [currentCar, setCurrentCar] = useState<Cars>();

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
        openRemoveModal,
        setOpenRemoveModal,
        openRegisterDescriptionModal,
        setOpenRegisterDescriptionModal,
        stage,
        setStage,
        carList,
        setCarList,
        carListFiltered,
        handleFilterCars,
        currentCar,
        setCurrentCar,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => {
  return useContext(RegisterContext);
};
