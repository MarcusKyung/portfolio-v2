import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Experience from "../Experience";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Homescreen() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <Experience />
      <ContactMe />
      <Footer />
    </>
  );
}