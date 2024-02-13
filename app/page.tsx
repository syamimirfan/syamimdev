import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/project-section";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-4 md:max-w-5xl">
       <HeroSection />
       <ProjectSection />
    </div>
  );
}
