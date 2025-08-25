import React from "react";
import HeroBanner from "../Components/Customs/HeroBanner";
import Services from "../Components/Customs/Services";
import Features from "../Components/Customs/Features";
import Process from "../Components/Customs/Process";
import { Element } from "react-scroll";
import Skills from "../Components/Customs/Skills";

const Home = () => {
  return (
    <>
      <Element name="home" id="home">
        {" "}
        <HeroBanner />
      </Element>
      <Element name="services" id="services">
        {" "}
        <Services />
      </Element>

      <Element name="work" id="work">
        {" "}
        <Features />
      </Element>
      <Element name="skills" id="skills">
        {" "}
        <Skills />
      </Element>
      <Process />
    </>
  );
};

export default Home;
