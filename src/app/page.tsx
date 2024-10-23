import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black flex min-h-screen container flex-col mx-auto py-4 px-12">
      <HeroSection/>
    </div>
  );
}
