import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Homepage";
import ParksPage from "./pages/Parkspage";
import ParkDetailPage from "./pages/ParkDetailPage";
import AboutPage from "./pages/Aboutpage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="parks" element={<ParksPage />} />
          <Route path="parks/:parkId" element={<ParkDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
