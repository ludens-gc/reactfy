import "./App.scss";
import NavBar from "./components/NavBar/NavBar.component";
import Footer from "./components/Footer/Footer.component";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
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
