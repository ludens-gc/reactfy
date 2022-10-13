import "./NavBar.style.scss";
import { useNavigate, NavLink } from "react-router-dom";

const NavBar = () => {
  // const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="pages-lists">
        <li>
          <img className="logo" src="./react.svg" alt="react logo" />
        </li>
        <li className="pages-item">Home</li>
        <li className="pages-item">Cadastro</li>
        <li className="pages-item">Playlists</li>
        <li className="pages-item">FAQ</li>
      </ul>
    </nav>
  );
};

export default NavBar;
