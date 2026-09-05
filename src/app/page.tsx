import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Awards } from "@/components/Awards";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <About />
      <JourneyTimeline />
      <Projects />
      <Skills />
      <Awards />
      <Leadership />
      <Contact />
    </main>
  );
}
