import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#121212] flex min-h-screen ">
      <div className="container flex-col mx-auto py-4 px-12">
        <HeroSection/>
      </div>
    </div>
  );
}
