import moment from "moment";
import style from "./Footer.module.scss";

const Footer = () => {
  let currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

  return (
    <div className={style.footer}>
      <h3>Reactfy. Todos os Direitos Reservados.</h3>
      <p>Data atual do sistema: {currentDate}</p>
    </div>
  );
};

export default Footer;
