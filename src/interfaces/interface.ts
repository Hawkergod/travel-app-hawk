import { FormEvent } from "react";

export type Props = {
  isLogin?: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

export enum IField {
  fullName = "fullName",
  email = "email",
  password = "password",
}

export type PropsAuthField = {
  onChangeHandler: (e: FormEvent<HTMLInputElement>, field: IField) => void;
};

export type PropsModal = {
  setOpenModal: (openModal: boolean) => void;
  onSubmitModal: (e: React.FormEvent<HTMLFormElement>) => void;
  item: {
    title: string;
    duration: number;
    level: string;
    price: number;
  };
  guests: string;
  setGuests: (guests: string) => void;
};
