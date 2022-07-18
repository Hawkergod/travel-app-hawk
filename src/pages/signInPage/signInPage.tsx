import { NavLink, useNavigate } from "react-router-dom";
import "assets/css/style.css";
import { IField, Props } from "interfaces/interface";
import { FormEvent, useState } from "react";
import { EmailPass } from "components/emaiPass";

export const SignInPage = ({ setIsLogin }: Props) => {
  let navigate = useNavigate();
  const [regData, setRegData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e: FormEvent<HTMLInputElement>, field: IField) => {
    setRegData({ ...regData, [field]: e.currentTarget.value });
  };

  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form
        className="sign-in-form"
        autoComplete="off"
        onSubmit={() => {
          setIsLogin(true);
          navigate("/");
        }}
      >
        <h2 className="sign-in-form__title">Sign In</h2>
        <EmailPass onChangeHandler={onChangeHandler} />
        <button className="button" type="submit">
          Sign In
        </button>
      </form>
      <span>
        Already have an account?
        <NavLink to="/sign-up" className="sign-in-form__link">
          Sign Up
        </NavLink>
      </span>
    </main>
  );
};
