import "./App.scss";
import NavBar from "./components/NavBar/NavBar.component";
import Footer from "./components/Footer/Footer.component";
export default function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Salve!</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
