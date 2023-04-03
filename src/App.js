import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { PageLayout } from "./components/PageLayout/PageLayout";
import { GamingPage } from "./components/GamingPage/GamingPage";
import { Route, Routes } from "react-router-dom";
import { SportsPage } from "./components/SportsPage/SportsPage";

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout>
            <LandingPage></LandingPage>
          </PageLayout>
        }
      />
      <Route path="/topic/gaming" element={<GamingPage />} />
      <Route path="/topic/sports" element={<SportsPage />} />
    </Routes>
  );
}
