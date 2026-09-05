import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <About />
      <JourneyTimeline />
      <Skills />
      <Contact />
    </main>
  );
}
