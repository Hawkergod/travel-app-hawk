import "assets/css/style.css";
import { EmailPass } from "components/emaiPass";
import { IField, Props } from "interfaces/interface";
import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const SignUpPage = ({ setIsLogin }: Props) => {
  let navigate = useNavigate();
  const [regData, setRegData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e: FormEvent<HTMLInputElement>, field: IField) => {
    setRegData({ ...regData, [field]: e.currentTarget.value });
  };

  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form
        className="sign-up-form"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          setIsLogin(true);
          navigate("/");
        }}
      >
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Full name</span>
          <input
            name="full-name"
            type="text"
            required
            onChange={(e) => onChangeHandler(e, IField.fullName)}
          />
        </label>
        <EmailPass onChangeHandler={onChangeHandler} />
        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
      <span>
        Already have an account?
        <NavLink to="/sign-in" className="sign-up-form__link">
          Sign In
        </NavLink>
      </span>
    </main>
  );
};
