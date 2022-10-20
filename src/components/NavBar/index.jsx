import { Link } from "react-router-dom";
import Logo from "../Logo";
import style from "./style.module.scss";

const NavBar = () => {
  return (
    <header>
      <nav className={style.navBar}>
        <ul className={style.pagesLists}>
          <Link to="/">
            <li>
              <Logo className={style.logo} />
            </li>
          </Link>
          <Link to="/">
            <li className={style.pagesItem}>Home</li>
          </Link>
          <Link to="/register">
            <li className={style.pagesItem}>Cadastro</li>
          </Link>
          <Link to="/playlists">
            <li className={style.pagesItem}>Playlists</li>
          </Link>
          <Link to="/faq">
            <li className={style.pagesItem}>FAQ</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
