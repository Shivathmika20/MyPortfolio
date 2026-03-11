import About from "@/components/About";
import DockNav from "@/components/DockNav";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hackathons from "@/components/Hackathons";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getExperience ,getProjects,getHackathons} from "@/sanity/lib/queries";

export default async function Home() {
  const experiences = await getExperience();
  const projects= await getProjects();
  const hackathons=await getHackathons();
  return (
    <div className="flex min-h-screen items-center justify-center mx-auto font-space dark:bg-black dark:text-white">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-12 px-16 bg-white dark:bg-black sm:items-start">
        <div>
        <Hero />
        <About />
        <Experience data={experiences} />
        <Skills />
        <Projects data={projects}/>
        <Hackathons data={hackathons} />
        <Education />
        </div>
        <DockNav />
      </main>
    </div>
  );
}
