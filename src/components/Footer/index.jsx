import moment from "moment";
import "./style.module.scss";

const Footer = () => {
  let currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

  return (
    <footer>
      <h3>Reactfy. Todos os Direitos Reservados.</h3>
      <p>Data atual do sistema: {currentDate}</p>
    </footer>
  );
};

export default Footer;
