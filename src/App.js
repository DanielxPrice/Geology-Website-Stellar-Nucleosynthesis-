import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import ElementFormation from "./pages/ElementFormation";
import StellarStages from "./pages/StellarStages";
import Supernovae from "./pages/Supernovae";
import Sources from "./pages/Sources";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <div className="stars"></div>
        <div className="stars starsTwo"></div>
        <div className="stars starsThree"></div>

        <Navbar />

        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/element-formation" element={<ElementFormation />} />
            <Route path="/stellar-stages" element={<StellarStages />} />
            <Route path="/supernovae" element={<Supernovae />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;