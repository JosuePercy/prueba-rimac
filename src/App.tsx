import { useEffect } from "react";
import Home from "./pages/home/Home";
import Plans from "./pages/plans/Plans";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import useViewStore from "./shared/store/useViewStore";
import Stepper from "./components/stepper/Stepper";
import Summary from "./pages/summary/Summary";
import useStepStore from "./shared/store/useStepStore";

function App() {
  const { currentView } = useViewStore();
  const { setStep } = useStepStore();

  useEffect(() => {
    // Sincronizar el paso con la vista actual
    switch (currentView) {
      case "home":
        setStep(1);
        break;
      case "plans":
        setStep(1);
        break;
      case "summary":
        setStep(2);
        break;
      default:
        setStep(1);
    }
  }, [currentView, setStep]); // Ejecutar cada vez que cambie la vista

 const renderView = () => {
    switch (currentView) {
      case "home":
        return <Home />;
      case "plans":
        return <Plans />;
      case "summary":
        return <Summary />;
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