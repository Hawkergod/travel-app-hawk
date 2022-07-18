import { IField, PropsAuthField } from "interfaces/interface";

export const EmailPass = ({ onChangeHandler }: PropsAuthField) => {
  return (
    <>
      {" "}
      <label className="trip-popup__input input">
        <span className="input__heading">Email</span>
        <input
          name="email"
          type="email"
          placeholder="aaa@bbb.ccc"
          required
          onChange={(e) => onChangeHandler(e, IField.email)}
        />
      </label>
      <label className="trip-popup__input input">
        <span className="input__heading">Password</span>
        <input
          name="password"
          type="password"
          min="3"
          max="20"
          autoComplete="new-password"
          required
          onChange={(e) => onChangeHandler(e, IField.password)}
        />
      </label>
    </>
  );
};
