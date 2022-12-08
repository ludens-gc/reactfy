import style from "./style.module.scss";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

const DefaultPage = () => {
  return (
    <>
      <NavBar />
      <Outlet className={style.main} />
      <Footer />
    </>
  );
};

export default DefaultPage;
