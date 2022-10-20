import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import DefaultPage from "./components/DefaultPage";
import PlaylistPage from "./pages/Playlists/PlaylistPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlists/:id" element={<PlaylistPage />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
