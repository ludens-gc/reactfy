import moment from "moment";

const Footer = () => {
  let currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

  return (
    <div className="footer">
      <h3>Reactfy. Todos os Direitos Reservados.</h3>
      <p>Data atual do sistema: {currentDate}</p>
    </div>
  );
};

export default Footer;
