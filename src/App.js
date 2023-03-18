import "./App.css";
import { Header } from "./components/Header/Header";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { PageLayout } from "./components/PageLayout/PageLayout";

function App() {
  return (
    <PageLayout>
      <LandingPage></LandingPage>
    </PageLayout>
  );
}

export default App;
