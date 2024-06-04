import { useState } from "react";
import "./App.css";
import PortFolio from "./components/PortFolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MyServices from "./components/MyServices";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import TechnicalSkills from "./components/TechnicalSkills";
import NotFound from "./components/404";
import LatestProject from "./components/LatestProject";

function App() {
  const [count, setCount] = useState(0);
  const [check, setcheck] = useState(true);
  const handleAddButton = () => {
    setCount(count + 1);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PortFolio />} />
          <Route path="/services" element={<MyServices />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/skills" element={<TechnicalSkills />} />
          <Route path="/project" element={<LatestProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
