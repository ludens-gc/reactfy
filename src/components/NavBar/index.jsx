import Logo from "../Logo";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <ul className={style.pagesLists}>
        <li>
          <Logo className={style.logo} />
        </li>
        <li className={style.pagesItem}>Home</li>
        <li className={style.pagesItem}>Cadastro</li>
        <li className={style.pagesItem}>Playlists</li>
        <li className={style.pagesItem}>FAQ</li>
      </ul>
    </nav>
  );
};

export default NavBar;
