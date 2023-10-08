"use client";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import SkillsShowCase from "./components/Skills";
import ExperienceComponent from "./components/Experience";
import SocialsComponent from "./components/Socials";
import AboutMe from "./components/AboutMe";
import ShowCase from "./components/ShowCase";
import AppDevHint from "./AppDevHint";
export default function Home() {
  return (
    <>
      <Navbar />
      <SocialsComponent />
      {/* <HomeSection /> */}
      <AboutMe />
      {/* <ExperienceComponent />
      <ShowCase />
      <SkillsShowCase /> */}
      <AppDevHint />
    </>
  );
}
