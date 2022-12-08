import { Link } from "react-router-dom";
import Button from "../../components/Button";
import style from "./style.module.scss";

const Home = () => {
  return (
    <main className={style.main}>
      <div id={style.showcase}>
        <div className={style.showcaseContainer}>
          <h2>Música para todos.</h2>
          <p>
            Milhões de músicas à sua escolha. E nem precisa de cartão de
            crédito.
          </p>
          <Link to="/users/register">
            <Button>Crie uma conta</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
