import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { ExperienceCaseStudy } from "@/components/ExperienceCaseStudy";
import { ProjectUniverse } from "@/components/ProjectUniverse";
import { AnalyticsLab } from "@/components/AnalyticsLab";
import { AchievementGallery } from "@/components/AchievementGallery";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <About />
      <JourneyTimeline />
      <ExperienceCaseStudy />
      <ProjectUniverse />
      <AnalyticsLab />
      <AchievementGallery />
      <Skills />
      <Contact />
    </main>
  );
}
