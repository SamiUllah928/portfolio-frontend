import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import TechnicalSkills from "./TechnicalSkills";

export default function PortFolio() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
      <MyServices />
      <TechnicalSkills />
    </div>
  );
}
