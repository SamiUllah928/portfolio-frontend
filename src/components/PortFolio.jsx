import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import TechnicalSkills from "./TechnicalSkills";
import ContactMe from "./ContactMe";
import LatestProject from "./LatestProject";

export default function PortFolio() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <MyServices />
      <TechnicalSkills />
      <LatestProject />
      <ContactMe />
    </div>
  );
}
