import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MyServices from "./components/MyServices";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import TechnicalSkills from "./components/TechnicalSkills";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<MyServices />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/skills" element={<TechnicalSkills />} />
      </Routes>
    </BrowserRouter> */}

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
