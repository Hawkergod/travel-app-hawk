import { useNavigate } from "react-router-dom";
import "assets/css/style.css";
import { Props } from "interfaces/interface";

export const ProfileNav = ({ setIsLogin }: Props) => {
  let navigate = useNavigate();
  return (
    <>
      <span className="visually-hidden">Profile</span>
      <img src="./images/user.svg" alt="profile icon" />
      <ul className="profile-nav__list">
        <li className="profile-nav__item profile-nav__username">John Doe</li>
        <li className="profile-nav__item">
          <button
            className="profile-nav__sign-out button"
            type="button"
            onClick={() => {
              setIsLogin(false);
              navigate("/sign-in");
            }}
          >
            Sign Out
          </button>
        </li>
      </ul>
    </>
  );
};
