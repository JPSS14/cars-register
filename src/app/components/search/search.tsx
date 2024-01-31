"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Hr, Input } from "..";
import styles from "./search.module.scss";
import { useRegisterContext } from "@/app/contexts/register-context";

interface SearchCar {
  carName: string;
}

export const Search = () => {
  const { setOpenRegisterModal } = useRegisterContext();
  const { register, handleSubmit } = useForm<SearchCar>();

  const onSubmit: SubmitHandler<SearchCar> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.search}>
      <h1>Encontre seu carro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("carName")} placeholder="Modelo ou montadora" />
        <Button type="submit" color="secondary">
          Buscar
        </Button>
      </form>
      <Hr />
      <Button onClick={() => setOpenRegisterModal(true)}>
        Registrar Carro
      </Button>
    </div>
  );
};
