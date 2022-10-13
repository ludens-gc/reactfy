import FAQ from "./pages/FAQ/FAQ.page";
import Home from "./pages/Home/home.page";
import Playlists from "./pages/Playlists/Playlists.page";
import Register from "./pages/Register/Register.page";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/faq" element={<FAQ />} />
      <Route exact path="/playlists" element={<Playlists />} />
      <Route exact path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
