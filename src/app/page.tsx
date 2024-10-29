import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#121212] flex min-h-screen ">
      <div className="container flex-col mx-auto py-4 px-12">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
        {/* <Footer/> */}
      </div>
    </div>
  );
}
