'use client'
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Taskflow",
    description:
      "A minimal project management app with real-time collaboration and intuitive kanban boards for modern teams.",
    tags: ["React", "TypeScript", "Supabase", "Real-time"],
    github: "#",
    live: "#",
  },
  {
    title: "Notioly",
    description:
      "Beautiful note-taking app with markdown support, tags, and instant search. Built for speed and simplicity.",
    tags: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Weatherly",
    description:
      "Clean weather dashboard with location-based forecasts and elegant data visualizations powered by OpenWeather.",
    tags: ["React", "D3.js", "OpenWeather API", "Charts"],
    github: "#",
  },
  {
    title: "DevLinks",
    description:
      "A link-in-bio tool for developers. Customizable profiles with analytics, themes, and social integrations.",
    tags: ["React", "Node.js", "MongoDB", "Auth"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border mb-3">
            My Projects
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Check out my latest work
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            I have worked on a variety of projects, from SaaS tools to developer utilities. Here are a few of my favorites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-lg border border-border bg-card p-5 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-sm font-semibold text-foreground mb-1.5">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Website
                  </a>
                )}
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-3 h-3" />
                  Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
