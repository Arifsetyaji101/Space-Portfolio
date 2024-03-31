import { CanvasRevealEffectDemo } from "@/components/CanvasReveal";
import SparklesPreview from "@/components/SparklePreview";
import TypewriterEffectSmoothDemo from "@/components/TypeWriter";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <CanvasRevealEffectDemo />
        <SparklesPreview />
        <TypewriterEffectSmoothDemo />
      </div>
    </main>
  );
}
