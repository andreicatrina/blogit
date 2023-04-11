import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { GamingPage } from "./components/GamingPage/GamingPage";
import { Route, Routes } from "react-router-dom";
import { SportsPage } from "./components/SportsPage/SportsPage";
import { PageLayout } from "./components/PageLayout/PageLayout";

export function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/topic/gaming" element={<GamingPage />} />
        <Route path="/topic/sports" element={<SportsPage />} />
      </Routes>
    </PageLayout>
  );
}
