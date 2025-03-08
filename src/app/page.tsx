import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#121212] flex min-h-screen w-full">
      <div className="container   w-full flex-col  py-4 px-4 sm:px-6 lg:px-8 mx-2 sm:mx-4 lg:mx-8">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
        {/* <Footer/> */}
      </div>
    </div>
  );
}
