import About from "@/components/About";
import DockNav from "@/components/DockNav";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hackathons from "@/components/Hackathons";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-space dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-12 px-16 bg-white dark:bg-black sm:items-start">
        <div>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Hackathons />
        <Education />
        </div>
        <DockNav />
      </main>
    </div>
  );
}
