import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { GamingPage } from "./pages/GamingPage/GamingPage";
import { Route, Routes } from "react-router-dom";
import { SportsPage } from "./pages/SportsPage/SportsPage";
import { PageLayout } from "./pages/PageLayout/PageLayout";
import { ResetPasswordPage } from "./pages/ResetPasswordPage/ResetPasswordPage";

export function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/topic/gaming" element={<GamingPage />} />
        <Route path="/topic/sports" element={<SportsPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
      </Routes>
    </PageLayout>
  );
}
