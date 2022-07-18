import { Outlet } from "react-router";
import { Footer } from "../footer";
import { Header } from "../header";
import "assets/css/style.css";
import { Props } from "interfaces/interface";

export const Layout = ({ isLogin, setIsLogin }: Props) => {
  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Outlet />
      <Footer />
    </>
  );
};
