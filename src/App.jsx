import style from "./App.module.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className={style.App}>
      <header>
        <NavBar />
      </header>
      <main>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
