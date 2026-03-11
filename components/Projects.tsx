'use client'
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type Project={
  _id: string;      
  title:string;
  description:string;
  tags:string[];
  githuburl:string;
  liveurl?:string;
}

const Projects = ({data}:{data:Project[]}) => {
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
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border mb-3">
            My Projects
          </span>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-2">
            Check out my latest work
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
          A collection of projects showcasing my work with modern web technologies.
        </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {data.map((project, i) => (
            <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-lg border border-border bg-card p-5 hover:shadow-sm transition-shadow flex flex-col h-full"  // ← add flex flex-col
          >
            <h3 className="text-sm font-semibold text-foreground mb-1.5">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3 ">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4 ">  {/* ← add flex-1 to push links down */}
              {(project.tags ?? []).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2 py-0.5 rounded bg-secondary text-secondary-foreground h-fit"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-auto">  {/* ← mt-auto keeps links at bottom */}
              {project.liveurl && (
                <Link
                  href={project.liveurl}
                  target="main"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Website
                </Link>
              )}
              <Link
                href={project.githuburl}
                target="main"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-3 h-3" />
                Source
              </Link>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
