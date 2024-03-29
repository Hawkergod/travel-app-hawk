import { NavLink } from "react-router-dom";
import { ProfileNav } from "components/profileNav.tsx";
import "assets/css/style.css";
import { Props } from "interfaces/interface";

export const Header = ({ isLogin, setIsLogin }: Props) => {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          Travel App
        </NavLink>
        <nav className="header__nav">
          {isLogin && (
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <NavLink to="/bookings" className="nav-header__inner">
                  <span className="visually-hidden">Bookings</span>
                  <img src="./images/briefcase.svg" alt=" icon" />
                </NavLink>
              </li>
              <li className="nav-header__item" title="Profile">
                <div className="nav-header__inner profile-nav" /*tabindex="0"*/>
                  <ProfileNav setIsLogin={setIsLogin} />
                </div>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};
