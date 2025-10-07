import { useEffect } from "react";
import Home from "./pages/home/Home";
import Plans from "./pages/plans/Plans";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import useViewStore from "./shared/store/useViewStore";
import useFormStore from "./shared/store/useFormStore";
import Stepper from "./components/stepper/Stepper";
import Summary from "./pages/summary/Summary";

function App() {
  const { currentView } = useViewStore();
  const { fetchUserData } = useFormStore();

  useEffect(() => {
    fetchUserData(); 
  }, [fetchUserData]);

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <Home />;
      case "plans":
        return <Plans />;
      case "summary": 
        return <Summary />
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header />
      {currentView === "plans" || currentView === "summary" ? (
        <Stepper  />
      ) : null}
      {renderView()}
      {currentView === "home" && <Footer />}
    </>
  );
}

export default App;