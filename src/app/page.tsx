import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div className="bg-[#121212] flex min-h-screen ">
      <div className="container flex-col mx-auto py-4 px-12">
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
      </div>
    </div>
  );
}
